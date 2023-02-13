const mongoose = require('mongoose')


const artworkSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String
		},
		date: {
			type: String
		},
		artist: {
			type: String,
			required: true,
		},
		dimensions: {
			type: String
		},
		medium: {
			type: String
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


