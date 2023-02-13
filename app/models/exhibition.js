const mongoose = require('mongoose')

const exhibitionSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        artworks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artwork',
        }],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Exhibition', exhibitionSchema)
