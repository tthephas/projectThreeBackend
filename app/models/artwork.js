const mongoose = require('mongoose')


const artworkSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
		artist: {
			type: String,
			required: true,
		},
		dimensions: {
			type: String,
			required: true,
		},
		medium: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		department: {
			type: String,
			required: true,
		},

	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Artwork', artworkSchema)


