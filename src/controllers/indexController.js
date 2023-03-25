const indexController = {
  index: (req, res) => {
    res.render('index', {
      styles: ['index'],
      title: ['Digital Cake'],
      isAuthenticated: req.session.isAuthenticated,
    });
  },
};

module.exports = indexController;
