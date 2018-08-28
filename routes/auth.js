var db = require("../models");

module.exports = function(app,passport) {

    // there's an error here. function has no name. must have a name because it is not a callback function -- gabe
    // function (req, res) {
 
    //     req.session.destroy(function(err) {
     
    //         res.redirect('/');
     
    //     });
     
    // }
    // Load index page
    app.get("/", function(req, res) {
     db.user.findAll({}).then(function(credentials) {
       res.render("index", {
         user: credentials
       });
     });
   });
 
   app.get("/signup", function(req,res){
     res.render("signup");
   });

   app.get("/dashboard", function(req,res){
       res.render('example');
   });

   app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/signup"
    })
  );
 };
