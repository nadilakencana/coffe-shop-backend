const express = require('express');
const router = express.Router();
const Replicate = require("replicate");

const {menu, tables} = require('../data/data_coffe_shop.js');

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

//menampilkan semua menu
router.get('/', (req, res) => {
  res.json(menu);
});




// search item menu 

router.get('/search', (req, res) => {

  console.log('Data menu yang tersedia:', menu); 

  const query = req.query.q;

  if (!query) {
    return res.json([]);
  }

  const queryLowerCase = query.toLowerCase();
  
  console.log('Query yang dicari:', queryLowerCase); 

  const hasilPencarian = menu.filter(item =>
    item.name.toLowerCase().includes(queryLowerCase) ||
    item.description.toLowerCase().includes(queryLowerCase) ||
    item.tags.some(tag => tag.toLowerCase().includes(queryLowerCase))
  );

  
  console.log('Hasil akhir filter:', hasilPencarian); 

  res.json(hasilPencarian);

});

// api untuk rekomendasi menu paling laris
router.post('/recommend', async (req, res) => {
  const { userInput } = req.body;
  const lowerCaseInput = userInput.toLowerCase();

  let filteredMenu = [...menu]; // Salin menu asli untuk kita filter
  let promptContext = "";
  let baseQuestion = `Berdasarkan daftar yang sudah disaring ini, berikan 1-2 rekomendasi terbaik dan jelaskan dengan ramah mengapa menu ini cocok untuk pelanggan.`;

  // =================================================================
  // LANGKAH 1 & 2: EKSTRAKSI NIAT & PRA-FILTER DATA
  // =================================================================

  // Skenario 1: Rekomendasi Makanan/Minuman Spesifik
  if (lowerCaseInput.includes('makanan') || lowerCaseInput.includes('food')) {
    filteredMenu = filteredMenu.filter(item => item.category === 'snack' || item.category === 'main-course');
  }
  if (lowerCaseInput.includes('minuman') || lowerCaseInput.includes('drink')) {
    filteredMenu = filteredMenu.filter(item => item.category === 'coffee' || item.category === 'non-coffee');
  }
  if (lowerCaseInput.includes('non-kopi') || lowerCaseInput.includes('non coffee')) {
    filteredMenu = filteredMenu.filter(item => item.category === 'non-coffee');
  }
  if (lowerCaseInput.includes('snack') || lowerCaseInput.includes('makanan ringan')) {
    filteredMenu = filteredMenu.filter(item => item.category === 'snack');
  }

  // Skenario 2: Pengecualian (Contoh: "selain cokelat")
  if (lowerCaseInput.includes('selain') || lowerCaseInput.includes('except')) {
    const keyword = lowerCaseInput.split('selain')[1]?.trim() || lowerCaseInput.split('except')[1]?.trim();
    if (keyword) {
      filteredMenu = filteredMenu.filter(item => !item.name.toLowerCase().includes(keyword) && !item.tags.includes(keyword) && !item.category.toLowerCase().includes(keyword));
    }
  }

  // Skenario 3: Best Seller
  if (lowerCaseInput.includes('best seller') || lowerCaseInput.includes('terlaris')) {
    filteredMenu.sort((a, b) => b.soldCount - a.soldCount);
    filteredMenu = filteredMenu.slice(0, 5); // Ambil 5 teratas untuk diberikan ke AI
    baseQuestion = `Berikut adalah 5 item terlaris kami dari kategori yang relevan. Tolong jelaskan kepada pelanggan mengapa item ini begitu populer dan rekomendasikan 1-2 yang terbaik.`;
  }
  
  // Skenario 4: Pairing (Contoh: "snack yang cocok untuk Americano")
  if (lowerCaseInput.includes('cocok untuk') || lowerCaseInput.includes('pairs with')) {
    const drinkName = lowerCaseInput.split('cocok untuk')[1]?.trim() || lowerCaseInput.split('pairs with')[1]?.trim();
    const targetDrink = menu.find(d => d.name.toLowerCase() === drinkName);

    if (targetDrink) {
      // Aturan pairing sederhana
      if (targetDrink.tags.includes('strong') || targetDrink.tags.includes('bitter')) {
        // Kopi pahit cocok dengan yang manis
        filteredMenu = menu.filter(item => item.category === 'snack' && item.tags.includes('sweet'));
        baseQuestion = `Pelanggan memesan ${targetDrink.name}. Berdasarkan daftar snack manis ini, rekomendasikan 1-2 yang paling cocok untuk menemani kopi pahit dan jelaskan kenapa.`;
      } else if (targetDrink.tags.includes('sweet') || targetDrink.tags.includes('creamy')) {
        // Minuman manis cocok dengan yang gurih
        filteredMenu = menu.filter(item => item.category === 'snack' && item.tags.includes('savory'));
        baseQuestion = `Pelanggan memesan ${targetDrink.name}. Dari daftar snack gurih ini, rekomendasikan 1-2 yang paling pas untuk menyeimbangkan rasa manis minumannya dan jelaskan kenapa.`;
      }
    }
  }

  // =================================================================
  // LANGKAH 3: MEMBUAT PROMPT DINAMIS
  // =================================================================

  const menuInfo = filteredMenu.map(item => `- ${item.name}: ${item.description}`).join('\n');
  
  promptContext = `
    Seorang pelanggan bertanya: "${userInput}"
    
    Berikut adalah daftar menu yang sudah saya saring dan relevan dengan permintaannya:
    ${menuInfo}

    Tugasmu: ${baseQuestion}
  `;

  const finalPrompt = `
    <|system|>
    You are a friendly and world-class AI Barista at "Kopi Kita". Your task is to give thoughtful and convincing recommendations based on the curated list provided. Never suggest items outside of the provided list.
    <|user|>
    ${promptContext}
    <|assistant|>
  `;



    try {
        const output = await replicate.run(
            'ibm-granite/granite-speech-3.3-8b',
            { input: { prompt: finalPrompt, max_new_tokens: 512 } }
        );
        res.json({ recommendation: output.join("") });
    } catch (error) {
        console.error('Error dari Replicate:', error);
        res.status(500).json({ error: "Maaf, AI kami sedang sibuk menyeduh kopi. Coba lagi nanti." });
    }

});


// detail item ambil parameter dari slug item menu 
router.get('/:slug', (req, res) => {
  const {slug} = req.params;
  const item = menu.find(item => item.slug === slug);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

module.exports = router;