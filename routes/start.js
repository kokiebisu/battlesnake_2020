module.exports = (app) => {
  app.get('/start', async (req, res) => {
    console.log('received start');
    try {
      const resData = {
        color: '#3d5a6c',
        headType: 'silly',
        tailType: 'bolt'
      };
      return res.json(resData);
    } catch (err) {
      res.status(404).json({
        status: 'error',
        message: err
      });
    }
  });
};

const express = require('express');
const router = express.Router();

// START
router.post('/start', (request, response) => {
  const resData = {
    color: '#3d5a6c',
    headType: 'silly',
    tailType: 'bolt'
  };

  return response.json(resData);
});
