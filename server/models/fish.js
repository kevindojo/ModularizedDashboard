
var mongoose = require('mongoose');

var FishSchema = new mongoose.Schema({
    name: String,
    color: String,
    size: String,
}, {
    timestamps: true
});
mongoose.model('Fish', FishSchema);
var Fish = mongoose.model('Fish');