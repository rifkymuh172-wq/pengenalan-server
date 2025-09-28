const express = require('express');
const app = express();
const port = 80;

app.use(express.json());

// GET root
app.get('/', (req, res) =>
  res.send(`Congratualations! Your Express server is running. ${port}`)
);

// GET dummy
app.get('/dummy-get', (req, res) =>
  res.json({ message: 'This is a dummy GET API' })
);

// POST dummy
app.post('/dummy-post', (req, res) => {
  const { body } = req;
  console.log('Received body:', body);
  res.json({
    message: `This is a dummy POST API, you sent: ${JSON.stringify(body)}`,
  });
});

// DELETE dummy
app.delete('/dummy-delete/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `This is a dummy DELETE API, user dengan id ${id} berhasil dihapus`,
  });
});

// Run server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));