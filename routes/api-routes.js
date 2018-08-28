//Grabing our models
var db = require("../models");

//Routes
module.exports = function(app) {
    app.get("/api/followup", function(req, res) {
        db.folUpM.findAll({}).then(function(dbFolUp) {
            res.json(dbFolUp);
        });
    });
}