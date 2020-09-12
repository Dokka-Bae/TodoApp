const Todos = require("../models/todoModels");

module.exports = function(app) {
    app.get("/api/setupTodos", function(req, res) {
        var seedTodos = [
            {
                text: "Hoc Nodejs",
                isDone: false
            },
            {
                text: "Hoc Angularjs",
                isDone: false
            }
        ];
        Todos.create(seedTodos, function(err, results) {
            res.send(results);
        });
    }); 
}

