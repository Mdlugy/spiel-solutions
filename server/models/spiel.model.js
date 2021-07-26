// bring in mongoose
const mongoose = require("mongoose");



// This is where we make our model
const SpielSchema = new mongoose.Schema({
    scriptName: {
        type: String,
        required: [true, "Name is required"],
        //name
    },
    isHead: {
        type: Boolean,
        default: false
    },
    Element: {
        type: String,
        // "Modal", "Page"
        required: [true, "Element is required"],
    },
    Pagearr: [],
    //array of Pages (object{id: "",Name:""})
    Modalarr: [],
    //array of Modals (object{id: "",Name:""})
    Snippet: {
        type: String,
        maxlength: [2000, "Snippet too long, 2000 chars max "]
        //content of Spiel
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [1, "Name is required "]
        //name
    },
    // 
});
// Finalize setting up my model
const Spiel = mongoose.model("Spiel", SpielSchema);
// We need to export this to other areas of my project
module.exports = Spiel;
