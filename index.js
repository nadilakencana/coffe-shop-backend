require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const apiRoutes = require('./routes/api_routes.js');
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/menu', apiRoutes);
app.use('/images', express.static('public/images'));



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});