const path = require('node:path');

module.exports = {
  route: (app) => {
    app.get('/account', function(req, res) {
      let filepath = path.resolve('./www/account.html');
      res.sendFile(filepath);
    });
  }
};
