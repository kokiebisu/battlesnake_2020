const express = require('express');
const routes = require('./routes/peoples');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

// START
app.post('/start', (request, response) => {
  const resData = {
    color: '#3d5a6c',
    headType: 'silly',
    tailType: 'bolt'
  };

  return response.json(resData);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
