let MoveController = require("../js_controller/MoveController");
let games = {};

module.exports = (app) => {
  app.post('/move', (req, res) => {
    console.log('received move');
    try {
      let gameId = req.body.game.id;
      let controller;
      if (games[gameId] !== null || games[gameId] !== undefined) {
        controller = games[gameId];
      } else {
        controller = new MoveController();
      }
      const resData = {
        status: 200,
        message: 'Received Move',
        move: controller.move()
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
