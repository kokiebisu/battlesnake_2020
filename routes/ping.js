module.exports = (app) => {
  app.post('/ping', (req, res) => {
    try {
      const resData = {
        status: 200,
        message: 'received ping'
      };
      res.json(resData);
    } catch (err) {
      res.status(404).json({
        status: 'error',
        message: err
      });
    }
  });
};
