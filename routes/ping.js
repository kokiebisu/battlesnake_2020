module.exports = (app) => {
  app.get('/ping', async (req, res) => {
    console.log('received ping');
    try {
      res.status(200).send();
    } catch (err) {
      res.status(404).json({
        status: 'error',
        message: err
      });
    }
  });
};
