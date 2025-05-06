const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`o Servidor está rodando na porta ${PORT}`);
});

app.get('/datetime', (req, res) => {
  const now = new Date();
  res.json({
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
  });
});
