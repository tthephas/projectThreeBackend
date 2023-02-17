const mongoose = require('mongoose')
const Exhibition = require('../models/exhibition')
const db = require('../../config/db')

const startExhibitions = [
    {
        title:'Utopia Editions',
        description:'Few artists have shaped the scope of contemporary art and influenced a younger generation more than Cynthia Talmadge. Since the early 1990s, her work has epitomized a new kind of subjectivity in photography, pairing intimacy and playfulness with social critique and the persistent questioning of existing values and hierarchies.',
        startDate:'2023-03-01',
        endDate:'2023-06-01',
        img:'https://galeriemagazine.com/wp-content/uploads/2020/12/56_Henry_12574_WEB.jpg',
        featured: true,
        artworks: []
    },
    {
        title:'Lisa Yuskavage Prints',
        description:'Yuskavage approaches printmaking with the same exacting interest in technique, material, and art history that guides her painting. She has described thinking of her oeuvre as a kind of “generational” family; most of her prints have a direct relationship to her paintings themes and compositions and also appear in important museum collections, including The Museum of Modern Art, New York, the Museum of Fine Arts, Houston, the Perez Art Museum, Miami and The Whitney Museum of American Art, New York.',
        startDate:'2017-03-01',
        endDate:'2017-09-30',
        img:'https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2021/10/YUSLI0971.jpeg?w=2400&quality=100&ssl=1',
        featured: true,
        artworks:[]
    },
    {
        title:'Franz West Furniture',
        description:'For Franz West, art was a social experience. Starting with his signature Passstücke, or Adaptives, in the 1970s, the Austrian-born artist (1947-2012) made sculptures that were meant to be handled and “adapted” by the audience. His furniture works, which he began creating in the early 1980s, only took this intention further. Furniture became an extensive part of his practice by the latter half of the decade—in his mind, these sculptural works were “Adaptives for the human body at rest.”',
        startDate:'2018-05-01',
        endDate:'2018-08-01',
        img:'https://d1bc1xn3hygkq4.cloudfront.net/image/4914/og/franz-west-almine-rech-gallery.jpg',
        featured: true,
        artworks: []
    },
    {
        title:'Donald Judd Untitled',
        description:'The present work is a stack composed of bands of galvanized steel wrapped around sheets of green plexiglass. Judd devised this configuration in 1967, and went on to produce numerous variations in color and material. As Marianne Stockebrand notes, “The effect is astonishing: color glows in the interstices and, seen as a whole, the vertical stacks look like gently gleaming columns; yet the actual structures appear so light that the metal bands seem to do no more than contain the color radiating outward.”',
        startDate:'2020-01-01',
        endDate:'2020-03-30',
        img:'https://www.moma.org/d/assets/W1siZiIsIjIwMjIvMTIvMjMvdWRkaTc0MzlsX0lOMjQ0NV8wNzRfQ0NDUl9QcmVzc19TaXRlLmpwZyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDExODR4NjY2XiAtZ3Jhdml0eSBDZW50ZXIgLWNyb3AgMTE4NHg2NjYrMCswIl1d/IN2445_074_CCCR-Press%20Site.jpg?sha=f03390b98db6a8af',
        featured: false,
        artworks: []
    },
    {
        title:'Still Life of Flowers',
        description:'The subject of an acclaimed exhibition at the Uffizi Gallery in 2020, Giovanna Garzoni (1600-1670) was one of the most renowned and accomplished still-life painters and miniaturists of the seventeenth century. One of the first women artists to master the art of still life painting, Garzoni is recognized as a pioneer of the genre and an important influence on subsequent generations of academic painters and artists',
        startDate:'2021-10-01',
        endDate:'2022-02-30',
        img:'https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2020/03/giovanna-garzoni-HOME.jpg?fit=1000%2C618&quality=100&ssl=1',
        featured: false,
        artworks: []
    }
]

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Exhibition.deleteMany()
            .then(deletedExhibitions => {
                console.log('the deleted exhibitions:', deletedExhibitions)
                // now we add our exhibitions to the db
                Exhibition.create(startExhibitions)
                    .then(newExhibitions => {
                        console.log('the new exhibitions', newExhibitions)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })
