const express = require('express');
const router = express.Router();
const Replicate = require("replicate");

const menu = require('../data/data_coffe_shop.js');
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

//menampilkan semua menu
router.get('/', (req, res) => {
  res.json(menu);
});




// search item menu 

router.get('/search', (req, res) => {
//  const query = req.query.q;

//   if (!query) {
//     return res.json([]); 
//   }

//   const queryLowerCase = query.toLowerCase();
//   const hasilPencarian = menu.filter(item => 
//     item.nama.toLowerCase().includes(queryLowerCase) ||
//     item.deskripsi.toLowerCase().includes(queryLowerCase) ||
//     item.tags.some(tag => tag.toLowerCase().includes(queryLowerCase))
//   );

//   res.json(hasilPencarian);

// LOG 1: Cek apakah data menu berhasil diimpor
  console.log('Data menu yang tersedia:', menu); 

  const query = req.query.q;

  if (!query) {
    return res.json([]);
  }

  const queryLowerCase = query.toLowerCase();
  
  // LOG 2: Cek apakah query dari URL diterima dengan benar
  console.log('Query yang dicari:', queryLowerCase); 

  const hasilPencarian = menu.filter(item =>
    item.nama.toLowerCase().includes(queryLowerCase) ||
    item.deskripsi.toLowerCase().includes(queryLowerCase) ||
    item.tags.some(tag => tag.toLowerCase().includes(queryLowerCase))
  );

  // LOG 3: Cek hasil akhir dari proses filter
  console.log('Hasil akhir filter:', hasilPencarian); 

  res.json(hasilPencarian);

});

// api untuk rekomendasi menu paling laris
router.post('/recommend', async (req, res) => {
  const { userInput } = req.body;
  const isAskingForBestSeller = userInput.includes('laris') || 
  userInput.includes('populer') || 
  userInput.includes('best seller');

  let promptContext = "";

  if (isAskingForBestSeller) {
        const menuTerlaris = [...menu].sort((a, b) => b.jumlahTerjual - a.jumlahTerjual);
        
        const top3Menu = menuTerlaris.slice(0, 3);
        
        const menuInfo = top3Menu.map(item => `- ${item.nama} (terjual ${item.jumlahTerjual} gelas): ${item.deskripsi}`).join('\n');
        promptContext = `
            Berdasarkan data penjualan, berikut adalah 3 menu terlaris kami:
            ${menuInfo}
            Tolong jelaskan kepada pelanggan dengan ramah mengapa menu-menu ini sangat populer dan rekomendasikan kepada mereka.
        `;

    } else {
        const menuString = menu.map(item => `- ${item.nama}: ${item.deskripsi}`).join('\n');
        promptContext = `
            Berikut adalah daftar menu yang tersedia:
            ${menuString}
            Berdasarkan daftar menu di atas, jawab pertanyaan pelanggan berikut: "${userInput}"
        `;
    }

    const finalPrompt = `
      <|system|>
      Anda adalah Barista AI di "Kopi Kita" yang sangat ramah dan informatif. Tugas Anda adalah memberikan rekomendasi yang meyakinkan.
      <|user|>
      ${promptContext}
      <|assistant|>
    `;


    try {
        const output = await replicate.run(
            'ibm-granite/granite-3.3-8b-instruct',
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