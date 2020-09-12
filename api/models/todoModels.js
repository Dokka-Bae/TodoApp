const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var todoSchema = new Schema({
    text: String,
    isDone: Boolean
});
// var Todos = mongoose.model("todoSchema", todoSchema);

module.exports = mongoose.model("todoSchema", todoSchema);
