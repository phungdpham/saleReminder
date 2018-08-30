var path = require("path");

module.exports = function(app) {
//  app.get("/customers", function(req, res) {
//     db.Customers.findAll({}).then(function(customers) {
//       res.render("customers", {
//         Customers: customers
//       });
//     });
//   });

  //GET route for getting of follow-up of today
  app.get("/followup", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/folUp.html"));
    // db.Follow_ups.findAll({}).then(function(cards) {
    //   res.render("followups", {
    //     Cards: cards
    //   });
    // });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};


