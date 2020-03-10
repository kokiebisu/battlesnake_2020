module.exports = (app) => {
  app.get('/move', async (req, res) => {
    console.log('received move');
    try {
      const resData = {
        status: 200,
        message: 'Received Move'
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
