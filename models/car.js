var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
var connection = mongoose.createConnection("mongodb://localhost:27017/react-router");
autoIncrement.initialize(connection);


//USER SCHEMA
var CarSchema = mongoose.Schema({
	id: {
		type: Schema.Types.ObjectId,
		ref: "Car"
	},
	name: {
		type: String
	},
	year: {
		type: String
	},
	model: {
		type: String
	},
	media:  {
		type: Number
	},
	price: {
		type: String
	}
});

CarSchema.plugin(autoIncrement.plugin, 'Car');
var Car = module.exports = mongoose.model("Car", CarSchema);