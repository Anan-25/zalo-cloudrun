const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
app.get('/sepay/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});
app.get('/', (req, res) => {
  res.send('Hello Cloud Run!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
