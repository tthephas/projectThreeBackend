const mongoose = require('mongoose')
const artworkSchema = require('./artwork')

const exhibitionSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
        startDate: {
            type: String,
            required: true
        },
        endDate: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        artworks: [artworkSchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Exhibition', exhibitionSchema)

