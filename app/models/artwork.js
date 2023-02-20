const mongoose = require('mongoose')


const artworkSchema = new mongoose.Schema(
	{	id: {
			type: Number,
		},
		title: {
			type: String,
			required: true,
		},
		date: {
			type: String
		},
		desc: {
			type: String
		},
		artist: {
			type: String,
		},
		dims: {
			type: String
		},
		type: {
			type: String
		},
		department: {
			type: String,
		},
		img: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = artworkSchema


