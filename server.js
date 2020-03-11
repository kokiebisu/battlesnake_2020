const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
require('./routes/ping')(app);
require('./routes/start')(app);
require('./routes/move')(app);
// require('./routes/start')(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
