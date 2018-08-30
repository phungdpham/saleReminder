//Grabing our models
var db = require("../models");

//Routes
module.exports = function(app) {
    //getting route for getting all of the follow up cards
    app.get("/api/followup", function(req, res) {
        // var query = {};
        // if (req.query.customer_id) {
        //     query.CustomerId = req.query.author_id;
        // }
        //Creating variable that grabs current date
        var d = new Date();
        var curDate = moment(d).format("MMM Do YY");

        db.folUpM.findAll({
            where: {
                duedate: curDate,
                open: true
            },
            include: [db.Customer]
        }).then(function(dbFolUp) {
            res.json(dbFolUp);
        });
    });
}