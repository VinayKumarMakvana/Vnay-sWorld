const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const projectRoot = process.cwd();
const targetDir = path.join(projectRoot, 'Study Material', 'Curated_Classics');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Re-classify existing books in DB to their true categories
async function reclassifyExistingBooks() {
  console.log('--- Step 1: Reclassifying existing books ---');
  
  const rules = [
    // Philosophy & Wisdom (Deep emotional life-wisdom, Kahlil Gibran, James Allen)
    {
      category: 'Philosophy & Wisdom',
      keywords: [
        'Prophet', 'As A Man Thinketh', 'All novels', 'BrokenWings', 'SandandFoam',
        'TheMadman', 'TheWanderer', 'TheEarthGods', 'TheForerunner', 'SpiritsRebellious',
        'ATearandASmile', 'PoetryKhalil', 'Lazarusandhis', 'JesustheSon'
      ]
    },
    // Business & Leadership
    {
      category: 'Business & Leadership',
      keywords: [
        'Rich Dad Poor Dad', 'World is Flat', 'managing people', 'Economics Satish',
        'Leaders Eat Last'
      ]
    },
    // Self-Development & Psychology
    {
      category: 'Self-Development & Psychology',
      keywords: [
        'Brian Tracy', 'Seven Habits', 'Laws of Human Nature', 'Imposter Syndrome',
        'Law of Attraction', 'EVOLUTION OF DESIRE', 'Come as You Are'
      ]
    },
    // Communication & Influence
    {
      category: 'Communication & Influence',
      keywords: [
        'Charisma Myth', 'Influence People', 'Cold Calling'
      ]
    },
    // English Language & Vocabulary
    {
      category: 'English Language & Vocabulary',
      keywords: [
        'speedreading', 'Pronunciation', 'Listening skills', 'Conversations 1', 'Getting Started'
      ]
    }
  ];

  const allBooks = await prisma.book.findMany();
  let updatedCount = 0;

  for (const b of allBooks) {
    for (const rule of rules) {
      const match = rule.keywords.some(kw => b.title.toLowerCase().includes(kw.toLowerCase()));
      if (match && b.category !== rule.category) {
        await prisma.book.update({
          where: { id: b.id },
          data: { category: rule.category }
        });
        console.log(`Reclassified "${b.title}" -> ${rule.category}`);
        updatedCount++;
        break;
      }
    }
  }

  console.log(`Reclassification complete. Updated ${updatedCount} existing books.\n`);
}

// Helper to sanitize text for WinAnsi PDF encoding
function sanitizeText(str) {
  if (!str) return '';
  return str
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/[^\x00-\x7F]/g, c => {
      const map = {
        'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
        'á': 'a', 'à': 'a', 'ä': 'a', 'â': 'a',
        'ó': 'o', 'ò': 'o', 'ö': 'o', 'ô': 'o',
        'ú': 'u', 'ù': 'u', 'ü': 'u', 'ñ': 'n',
        'ç': 'c', 'É': 'E', 'È': 'E', 'À': 'A'
      };
      return map[c] || ' ';
    });
}

// Word wrap helper
function wrapText(text, maxWidth, font, fontSize) {
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = '';
  
  for (const word of words) {
    if (!word) continue;
    const testLine = currentLine ? currentLine + ' ' + word : word;
    const width = font.widthOfTextAtSize(testLine, fontSize);
    if (width <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

// Strip Project Gutenberg boilerplate
function extractBookContent(rawText) {
  const startMarkers = [
    '*** START OF THE PROJECT GUTENBERG',
    '*** START OF THIS PROJECT GUTENBERG',
    '*END*THE SMALL PRINT!',
    '***START OF THE PROJECT GUTENBERG'
  ];
  const endMarkers = [
    '*** END OF THE PROJECT GUTENBERG',
    '*** END OF THIS PROJECT GUTENBERG',
    'End of the Project Gutenberg',
    'End of Project Gutenberg',
    '***END OF THE PROJECT GUTENBERG'
  ];

  let startIndex = 0;
  for (const sm of startMarkers) {
    const idx = rawText.indexOf(sm);
    if (idx !== -1) {
      const nextLine = rawText.indexOf('\n', idx);
      startIndex = nextLine !== -1 ? nextLine + 1 : idx + sm.length;
      break;
    }
  }

  let endIndex = rawText.length;
  for (const em of endMarkers) {
    const idx = rawText.indexOf(em, startIndex);
    if (idx !== -1) {
      endIndex = idx;
      break;
    }
  }

  return rawText.slice(startIndex, endIndex).trim();
}

// Generate complete formatted PDF
async function createBookPdf(bookInfo, textContent, outputPath) {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const boldFont = await doc.embedFont(StandardFonts.HelveticaBold);
  const italicFont = await doc.embedFont(StandardFonts.HelveticaOblique);

  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const marginX = 54;
  const marginY = 60;
  const contentWidth = pageWidth - (marginX * 2);

  // --- 1. COVER PAGE (Luxury Emerald & Gold Theme) ---
  const cover = doc.addPage([pageWidth, pageHeight]);
  
  // Background
  cover.drawRectangle({
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
    color: rgb(0.02, 0.04, 0.03) // Deep dark emerald black
  });

  // Border Frame
  cover.drawRectangle({
    x: 25,
    y: 25,
    width: pageWidth - 50,
    height: pageHeight - 50,
    borderColor: rgb(0.96, 0.62, 0.04), // Metallic Gold
    borderWidth: 2
  });

  cover.drawRectangle({
    x: 30,
    y: 30,
    width: pageWidth - 60,
    height: pageHeight - 60,
    borderColor: rgb(0.06, 0.72, 0.51), // Glowing Emerald
    borderWidth: 0.75
  });

  // Header tag
  cover.drawText("VINAY'S WORLD • CURATED DIGITAL LIBRARY", {
    x: marginX,
    y: pageHeight - 90,
    size: 11,
    font: boldFont,
    color: rgb(0.96, 0.62, 0.04)
  });

  // Category Pill
  cover.drawText(bookInfo.category.toUpperCase(), {
    x: marginX,
    y: pageHeight - 110,
    size: 9,
    font: boldFont,
    color: rgb(0.06, 0.72, 0.51)
  });

  // Title
  const titleLines = wrapText(bookInfo.title, contentWidth, boldFont, 24);
  let titleY = pageHeight - 220;
  for (const tl of titleLines) {
    cover.drawText(tl, {
      x: marginX,
      y: titleY,
      size: 24,
      font: boldFont,
      color: rgb(1, 1, 1)
    });
    titleY -= 32;
  }

  // Author
  cover.drawText('BY ' + bookInfo.author.toUpperCase(), {
    x: marginX,
    y: titleY - 20,
    size: 14,
    font: boldFont,
    color: rgb(0.96, 0.75, 0.25)
  });

  // Short description
  const descLines = wrapText(bookInfo.shortDescription, contentWidth - 20, italicFont, 11);
  let descY = titleY - 70;
  for (const dl of descLines) {
    cover.drawText(dl, {
      x: marginX,
      y: descY,
      size: 11,
      font: italicFont,
      color: rgb(0.75, 0.85, 0.8)
    });
    descY -= 18;
  }

  // Footer on cover
  cover.drawText('Complete & Unabridged Classic • High Quality Edition', {
    x: marginX,
    y: 60,
    size: 9,
    font,
    color: rgb(0.5, 0.6, 0.55)
  });

  // --- 2. BODY CONTENT PAGES ---
  const cleanBody = sanitizeText(textContent);
  const paragraphs = cleanBody.split(/\n\s*\n+/);

  let currentPage = null;
  let currentY = 0;
  let pageNumber = 1;

  function addNewPage() {
    currentPage = doc.addPage([pageWidth, pageHeight]);
    currentY = pageHeight - marginY;
    pageNumber++;

    // Running Header
    currentPage.drawText(`Vinay's World • ${bookInfo.title.slice(0, 40)}`, {
      x: marginX,
      y: pageHeight - 35,
      size: 8,
      font: italicFont,
      color: rgb(0.4, 0.5, 0.45)
    });

    // Running Footer (Page number)
    currentPage.drawText(`${pageNumber}`, {
      x: pageWidth - marginX - 15,
      y: 35,
      size: 9,
      font,
      color: rgb(0.4, 0.5, 0.45)
    });
  }

  addNewPage();

  const fontSize = 10;
  const lineHeight = 14.5;

  for (const para of paragraphs) {
    const trimmed = para.trim().replace(/\s+/g, ' ');
    if (!trimmed) continue;

    // Detect potential chapter heading (short and uppercase or starts with Chapter/Book/Part)
    const isHeading = (trimmed.length < 50 && /^(chapter|part|book|section|canto|\b[IVXLCDM]+\b)/i.test(trimmed)) || (trimmed.length < 40 && trimmed === trimmed.toUpperCase());
    
    const activeFont = isHeading ? boldFont : font;
    const activeSize = isHeading ? 12 : fontSize;
    const activeLineHeight = isHeading ? 20 : lineHeight;
    const activeColor = isHeading ? rgb(0.02, 0.45, 0.3) : rgb(0.12, 0.12, 0.12);

    const lines = wrapText(trimmed, contentWidth, activeFont, activeSize);

    if (currentY - (lines.length * activeLineHeight) < marginY) {
      addNewPage();
    }

    if (isHeading) {
      currentY -= 10;
    }

    for (const line of lines) {
      currentPage.drawText(line, {
        x: marginX,
        y: currentY,
        size: activeSize,
        font: activeFont,
        color: activeColor
      });
      currentY -= activeLineHeight;

      if (currentY < marginY) {
        addNewPage();
      }
    }

    currentY -= isHeading ? 12 : 7; // Paragraph spacing
  }

  const pdfBytes = await doc.save();
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Saved PDF: ${path.basename(outputPath)} (${(pdfBytes.length / (1024 * 1024)).toFixed(2)} MB, ${pageNumber} pages)`);
  return pdfBytes.length;
}

// 15 World-Class Books Definition
const CURATED_BOOKS = [
  // Philosophy & Wisdom / Deep Real Life
  {
    id: 'curated-siddhartha',
    filename: 'Hermann_Hesse_Siddhartha.pdf',
    title: 'Siddhartha: An Indian Tale',
    author: 'Hermann Hesse',
    category: 'Philosophy & Wisdom',
    topics: 'Spirituality, Meaning of Life, Inner Peace, Awakening, Soul',
    shortDescription: 'A deeply emotional and lyrical masterpiece tracing a man\'s lifelong search for inner peace, emotional truth, and spiritual awakening along the sacred river.',
    url: 'https://www.gutenberg.org/cache/epub/2500/pg2500.txt'
  },
  {
    id: 'curated-enchiridion',
    filename: 'Epictetus_The_Enchiridion.pdf',
    title: 'The Enchiridion (The Manual for Living)',
    author: 'Epictetus',
    category: 'Philosophy & Wisdom',
    topics: 'Stoicism, Emotional Resilience, Mental Peace, Control',
    shortDescription: 'The ultimate ancient handbook on mental freedom, emotional resilience, overcoming anxiety, and understanding what you can and cannot control in real life.',
    url: 'https://www.gutenberg.org/cache/epub/10661/pg10661.txt'
  },
  {
    id: 'curated-tao-te-ching',
    filename: 'Lao_Tzu_Tao_Te_Ching.pdf',
    title: 'Tao Te Ching (The Book of the Way)',
    author: 'Lao Tzu',
    category: 'Philosophy & Wisdom',
    topics: 'Simplicity, Wu Wei, Harmony, Humility, Taoism',
    shortDescription: 'Timeless oriental wisdom on natural simplicity, effortless action (Wu Wei), peace of mind, and flowing with the currents of real life.',
    url: 'https://www.gutenberg.org/cache/epub/216/pg216.txt'
  },
  {
    id: 'curated-walden',
    filename: 'Henry_David_Thoreau_Walden.pdf',
    title: 'Walden (Life in the Woods)',
    author: 'Henry David Thoreau',
    category: 'Philosophy & Wisdom',
    topics: 'Mindfulness, Nature, Deep Real-Life Living, Simplicity',
    shortDescription: 'A profound personal reflection on escaping modern rat races, living deliberately, and discovering what is truly essential to human existence.',
    url: 'https://www.gutenberg.org/cache/epub/205/pg205.txt'
  },
  {
    id: 'curated-seneca-shortness-life',
    filename: 'Seneca_On_the_Shortness_of_Life.pdf',
    title: 'On the Shortness of Life & Peace of Mind',
    author: 'Lucius Annaeus Seneca',
    category: 'Philosophy & Wisdom',
    topics: 'Time Management, Mortality, Tranquillity, Purpose',
    shortDescription: 'Seneca\'s world-famous reflections on why we waste our years, the illusion of time, dealing with grief, and achieving true inner tranquillity.',
    url: 'https://www.gutenberg.org/cache/epub/56075/pg56075.txt'
  },
  {
    id: 'curated-tolstoy-confession',
    filename: 'Leo_Tolstoy_A_Confession.pdf',
    title: 'A Confession (My Search for Meaning)',
    author: 'Leo Tolstoy',
    category: 'Philosophy & Wisdom',
    topics: 'Existential Crisis, Depression, Spiritual Search, Truth',
    shortDescription: 'Tolstoy\'s raw, emotional, soul-baring memoir on facing depression and despair at the peak of his fame, and his profound rediscovery of why life is worth living.',
    url: 'https://www.gutenberg.org/cache/epub/6149/pg6149.txt'
  },

  // Self-Development & Deep Emotional Psychology
  {
    id: 'curated-white-nights',
    filename: 'Fyodor_Dostoevsky_White_Nights.pdf',
    title: 'White Nights (From the Diary of a Dreamer)',
    author: 'Fyodor Dostoevsky',
    category: 'Self-Development & Psychology',
    topics: 'Human Longing, Solitude, Deep Emotion, Vulnerability',
    shortDescription: 'One of the most touching, heart-wrenching psychological stories ever written about loneliness, tender love, human vulnerability, and the fragility of real-life connections.',
    url: 'https://www.gutenberg.org/cache/epub/36034/pg36034.txt'
  },
  {
    id: 'curated-metamorphosis',
    filename: 'Franz_Kafka_The_Metamorphosis.pdf',
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    category: 'Self-Development & Psychology',
    topics: 'Alienation, Family Dynamics, Psychological Truth, Empathy',
    shortDescription: 'A powerful psychological masterpiece exploring the burden of financial responsibility, isolation, and how human relationships change when conditions turn difficult.',
    url: 'https://www.gutenberg.org/cache/epub/5200/pg5200.txt'
  },
  {
    id: 'curated-self-reliance',
    filename: 'Ralph_Waldo_Emerson_Self_Reliance.pdf',
    title: 'Self-Reliance and Selected Essays',
    author: 'Ralph Waldo Emerson',
    category: 'Self-Development & Psychology',
    topics: 'Authenticity, Inner Strength, Overcoming Conformity, Confidence',
    shortDescription: 'An electrifying manifesto urging individuals to trust their intuition, stand firm in their convictions, and stop living according to the expectations of others.',
    url: 'https://www.gutenberg.org/cache/epub/16643/pg16643.txt'
  },

  // Business & Leadership
  {
    id: 'curated-art-of-war',
    filename: 'Sun_Tzu_The_Art_of_War.pdf',
    title: 'The Art of War',
    author: 'Sun Tzu',
    category: 'Business & Leadership',
    topics: 'Strategy, Leadership, Conflict Resolution, Tactical Vision',
    shortDescription: 'The definitive ancient classic on strategic foresight, winning without battle, discipline, leadership psychology, and high-stakes decision-making.',
    url: 'https://www.gutenberg.org/cache/epub/132/pg132.txt'
  },
  {
    id: 'curated-benjamin-franklin',
    filename: 'Benjamin_Franklin_Autobiography.pdf',
    title: 'The Autobiography of Benjamin Franklin',
    author: 'Benjamin Franklin',
    category: 'Business & Leadership',
    topics: 'Habit Tracking, 13 Virtues, Time Management, Enterprise',
    shortDescription: 'The pioneer classic of practical self-improvement, daily routine scheduling, moral perfection, work ethic, and building success from humble beginnings.',
    url: 'https://www.gutenberg.org/cache/epub/20203/pg20203.txt'
  },
  {
    id: 'curated-art-of-money-getting',
    filename: 'PT_Barnum_The_Art_of_Money_Getting.pdf',
    title: 'The Art of Money Getting (Golden Rules for Success)',
    author: 'P. T. Barnum',
    category: 'Business & Leadership',
    topics: 'Financial Prudence, Integrity, Business Growth, Hustle',
    shortDescription: 'Sharp, entertaining, and timeless wisdom on finding your true vocation, preserving capital, avoiding debt traps, and building genuine customer trust.',
    url: 'https://www.gutenberg.org/cache/epub/8581/pg8581.txt'
  },

  // Communication & Influence
  {
    id: 'curated-art-of-controversy',
    filename: 'Arthur_Schopenhauer_Art_of_Controversy.pdf',
    title: 'The Art of Controversy (The Art of Being Right)',
    author: 'Arthur Schopenhauer',
    category: 'Communication & Influence',
    topics: 'Debate, Rhetoric, Dialectics, Persuasion, Psychological Tactics',
    shortDescription: 'Schopenhauer\'s brilliant and razor-sharp analysis of 38 dialectical stratagems people use in verbal debates, persuasion, and arguments in real life.',
    url: 'https://www.gutenberg.org/cache/epub/10731/pg10731.txt'
  },
  {
    id: 'curated-the-crowd',
    filename: 'Gustave_Le_Bon_The_Crowd.pdf',
    title: 'The Crowd: A Study of the Popular Mind',
    author: 'Gustave Le Bon',
    category: 'Communication & Influence',
    topics: 'Social Psychology, Mass Persuasion, Influence, Charisma',
    shortDescription: 'The groundbreaking psychological study on group thinking, contagion of emotion, public speaking, and how leaders sway crowds and public opinion.',
    url: 'https://www.gutenberg.org/cache/epub/445/pg445.txt'
  },

  // English Language & Vocabulary
  {
    id: 'curated-elements-of-style',
    filename: 'William_Strunk_The_Elements_of_Style.pdf',
    title: 'The Elements of Style',
    author: 'William Strunk Jr.',
    category: 'English Language & Vocabulary',
    topics: 'English Writing, Grammar, Clarity, Composition Mastery',
    shortDescription: 'The legendary gold standard guide to powerful, concise, and elegant English writing: omit needless words, use active voice, and express thoughts clearly.',
    url: 'https://www.gutenberg.org/cache/epub/37134/pg37134.txt'
  }
];

async function fetchAndAddCuratedBooks() {
  console.log('--- Step 2: Downloading & Generating 15 Authentic Curated Classics ---');

  for (let i = 0; i < CURATED_BOOKS.length; i++) {
    const b = CURATED_BOOKS[i];
    const filePath = path.join(targetDir, b.filename);

    console.log(`[${i + 1}/${CURATED_BOOKS.length}] Processing "${b.title}"...`);

    let fileSize = 0;
    if (fs.existsSync(filePath)) {
      fileSize = fs.statSync(filePath).size;
      console.log(`  File already exists: ${(fileSize / 1024).toFixed(1)} KB`);
    } else {
      console.log(`  Fetching text from: ${b.url}`);
      try {
        const res = await fetch(b.url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/plain,text/html,*/*'
          }
        });
        if (!res.ok) {
          console.error(`  Failed to fetch: ${res.status}`);
          continue;
        }
        const rawText = await res.text();
        const bookContent = extractBookContent(rawText);
        console.log(`  Extracted text length: ${bookContent.length} chars. Generating PDF...`);
        fileSize = await createBookPdf(b, bookContent, filePath);
        // Be polite to Gutenberg servers
        await new Promise(r => setTimeout(r, 1200));
      } catch (err) {
        console.error(`  Error processing "${b.title}":`, err.message);
        continue;
      }
    }

    // Upsert into DB
    await prisma.book.upsert({
      where: { id: b.id },
      update: {
        title: b.title,
        author: b.author,
        filePath: filePath,
        fileType: 'pdf',
        fileSizeBytes: fileSize,
        category: b.category,
        topics: b.topics,
        shortDescription: b.shortDescription,
        importStatus: 'READY'
      },
      create: {
        id: b.id,
        title: b.title,
        author: b.author,
        filePath: filePath,
        fileType: 'pdf',
        fileSizeBytes: fileSize,
        category: b.category,
        topics: b.topics,
        shortDescription: b.shortDescription,
        language: 'English',
        importStatus: 'READY'
      }
    });

    console.log(`  Database record ready for "${b.title}".\n`);
  }
}

async function printSummary() {
  console.log('--- Final Category Summary ---');
  const books = await prisma.book.findMany({ select: { category: true } });
  const counts = {};
  for (const b of books) {
    const c = b.category || 'Uncategorized';
    counts[c] = (counts[c] || 0) + 1;
  }
  for (const [k, v] of Object.entries(counts)) {
    console.log(`  ${k}: ${v} books`);
  }
  console.log(`Total Books in Library: ${books.length}`);
}

async function main() {
  await reclassifyExistingBooks();
  await fetchAndAddCuratedBooks();
  await printSummary();
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
