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

      const { email, password } = req.body;                                     //req.body is the data sent from the client side
      const user = users.find(u => u.email === email && u.password === password); //find the user in the array of users

      if (user) {                                 //if the user is found
        res.json({ valid: true });
      } else {                                  //if the user is not found
        res.json({ valid: false });
      }
    });
  }
};
