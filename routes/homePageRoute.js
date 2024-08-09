const path = require('node:path');

module.exports = {
  route: (app) => {
    app.get('/homepage', function(req, res) {
      let filepath = path.resolve('./www/homepage.html');
      res.sendFile(filepath);
    });

    app.post('/homepage', function(req, res) {
      const users = [
        { email: 'test@email.com', password: '123' },
        { email: 'test1@email.com', password: '123' },
        { email: 'test2@email.com', password: '123' },
      ];

      const { email, password } = req.body;
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        res.json({ valid: true });
      } else {
        res.json({ valid: false });
      }
    });
  }
};
