const Todos = require("../models/todoModels");
const e = require("express");

function getTodos(res) {
    Todos.find(function(err, todos) {
        if (err) res.status(500).json(err);
        else res.json(todos);
    });
}

module.exports = function(app) {
    // get all todos = GET/api/todo
    app.get("/api/todos", function(req, res) {
        getTodos(res);
    });

    /**
     * Find by ID
     */
    // app.get("/api/todo/:id", function(req, res) {
    //     Todos.findById({_id: req.params.id}, function(err, todo) {
    //         if (err) throw err;
    //         else res.send(todo)
    //     })
    // }); 

    /**
     * Creat a todo
     */

    app.post("/api/todo", function(req, res) {
        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        }

        Todos.create(todo, function(err, todo) {
            if(err) throw err;
            else getTodos(res);                         // khong co loi tra lai toan bo cho client
        })
    });

    /**
     * Update a todo
     */

     app.put("/api/todo", function(req, res) {
         if(!req.body._id) res.status(500).send("ID required to update");
         else {
             Todos.update({
                 _id:req.body._id
             }, {
                text: req.body.text,
                isDone: req.body.isDone
             }, function(err, todo) {
                 if (err) res.status(500).json(err);
                 else getTodos(res);
             })
         }
     })

     /**
      * Delete a todo
      */

     app.delete("/api/todo/:id", function(req, res) {
         Todos.remove({
             _id:req.params.id
         }, function(err, todo) {
             if(err) res.status(500).json(err);
             else getTodos(res);
         })
     })
}