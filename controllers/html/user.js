const renderLogin = (req, res) => {
  res.render("login");
};

const renderSignUp = (req, res) => {
  res.render("signup");
};

export const userHtmlController = {
  renderLogin,
  renderSignUp,
};
