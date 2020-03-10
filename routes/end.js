module.exports = (app) => {
  app.get('/move', async (req, res) => {
    try {
      const resData = {
        status: 200,
        message: 'Received End. Bye.'
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
