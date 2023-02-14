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
        featured: {
            type: Boolean,
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

const startExhibitions = [
    {
        title:'Utopia Editions',
        description:'Few artists have shaped the scope of contemporary art and influenced a younger generation more than Cynthia Talmadge. Since the early 1990s, her work has epitomized a new kind of subjectivity in photography, pairing intimacy and playfulness with social critique and the persistent questioning of existing values and hierarchies.',
        startDate:'2023-03-01',
        endDate:'2023-06-01',
        img:'app/images/exhibUtopia.jpeg',
        featured: true,
        artworks:'',
        owner:'Cynthia Talmadge'
    },
    {
        title:'Lisa Yuskavage Prints',
        description:'Yuskavage approaches printmaking with the same exacting interest in technique, material, and art history that guides her painting. She has described thinking of her oeuvre as a kind of “generational” family; most of her prints have a direct relationship to her paintings themes and compositions and also appear in important museum collections, including The Museum of Modern Art, New York, the Museum of Fine Arts, Houston, the Perez Art Museum, Miami and The Whitney Museum of American Art, New York.',
        startDate:'2017-03-01',
        endDate:'2017-09-30',
        img:'app/images/exhibLisaYuskavage.webp',
        featured: true,
        artworks:'',
        owner:'Lisa Yuskavage'
    },
    {
        title:'Franz West Furniture',
        description:'For Franz West, art was a social experience. Starting with his signature Passstücke, or Adaptives, in the 1970s, the Austrian-born artist (1947-2012) made sculptures that were meant to be handled and “adapted” by the audience. His furniture works, which he began creating in the early 1980s, only took this intention further. Furniture became an extensive part of his practice by the latter half of the decade—in his mind, these sculptural works were “Adaptives for the human body at rest.”',
        startDate:'2018-05-01',
        endDate:'2018-08-01',
        img:'app/images/exhibFranzWest.webp',
        featured: true,
        artworks:'',
        owner:'Franz West'
    },
    {
        title:'Donald Judd Untitled',
        description:'The present work is a stack composed of bands of galvanized steel wrapped around sheets of green plexiglass. Judd devised this configuration in 1967, and went on to produce numerous variations in color and material. As Marianne Stockebrand notes, “The effect is astonishing: color glows in the interstices and, seen as a whole, the vertical stacks look like gently gleaming columns; yet the actual structures appear so light that the metal bands seem to do no more than contain the color radiating outward.”',
        startDate:'2020-01-01',
        endDate:'2020-03-30',
        img:'app/images/exhibDonaldJudd.jpeg',
        featured: false,
        artworks:'',
        owner:'Donald Judd'
    },
    {
        title:'Still Life of Flowers',
        description:'The subject of an acclaimed exhibition at the Uffizi Gallery in 2020, Giovanna Garzoni (1600-1670) was one of the most renowned and accomplished still-life painters and miniaturists of the seventeenth century. One of the first women artists to master the art of still life painting, Garzoni is recognized as a pioneer of the genre and an important influence on subsequent generations of academic painters and artists',
        startDate:'2021-10-01',
        endDate:'2022-02-30',
        img:'app/images/exhibGiovannaGarzoni.jpeg',
        featured: false,
        artworks:'',
        owner:'Giovanna Garzoni'
    }

]