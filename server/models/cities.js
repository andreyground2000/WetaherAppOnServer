const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema ({
    cityName: { type: String, unique: true, required: true },
}, 
{ timestamps: true }
);

module.exports = mongoose.model("City", citySchema);