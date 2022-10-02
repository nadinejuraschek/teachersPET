import db from '../../models/index.js';

const renderHome = (req, res) => {
  if (req.user) {
    res.redirect('/index');
  }
  res.redirect('/login');
};

const renderDashboard = (req, res) => {
  if (req.user) {
    Promise.all([
      db.User.findOne({ where: {_id: req.user }}),
      db.Class.findAll()
    ]).then(data => {
      const userName = data[0].firstName;
      // console.log(userName);
      const classData = data[1];
      res.render("index", { name: userName, classData: classData });
    });
  } else {
    res.render("login");
  };
};

const renderNotFound = (req, res) => {
  res.render("404");
};

export const generalHtmlController = {
  renderDashboard,
  renderHome,
  renderNotFound,
};
