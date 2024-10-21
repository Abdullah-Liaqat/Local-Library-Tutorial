const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const someModelSchema = new Schema ({
    a_string : String,
    a_date : Date,
});

// Yahan Hum Export method ka use kar rahe hain Below code 
// export method apply hone ke jab code execute hoga toh hum us exported file ko kahin access kar sakte hain.
module.exports = mongoose.model("SomeModel", SomeModelSchema);

// Create somemodel kiya aur phir require karenge module ko.
const SomeModel = require("./Models/someModels");

// Ab Hum SomeModel object (model) se iske tamam records Find karenge (Below Code).
const modelInstances = await SomeModel.find().exec();


