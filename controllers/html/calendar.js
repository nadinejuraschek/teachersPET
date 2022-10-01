const renderCalendarView = (req, res) => {
  if(req.user){
    res.render("calendar");
  }
  res.render("login");
};

export const calendarHtmlController = {
  renderCalendarView,
};
