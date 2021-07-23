// bring in mongoose
const mongoose = require("mongoose");

// This is where we make our model
const SpielSchema = new mongoose.Schema({
    Element: {
        type: String,
        required: [true, "Element is required"],
        minlength: [1, "Element is required "]
    },
    // title: String,
    Pagearr: [],
    Modalarr: [],
    Snippet: {
        type: String,

        maxlength: [2000, "Snippet too long, 2000 chars max "]

    },
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [1, "Name is required "]
    },
    // 
});
// Finalize setting up my model
const Spiel = mongoose.model("Spiel", SpielSchema);
// We need to export this to other areas of my project
module.exports = Spiel;

// Spiel:

// Element{ Type :string (either "Modal" or Page
// },
// Pagearr: Type arr(array of all pages linked from this page
// )
// Modalarr: Type arr(array of all modals accessible on this page
// )
// Snippet: Type:string Max length 20000 chars
// name: Type string