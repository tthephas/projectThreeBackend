const mongoose = require('mongoose')
const Exhibition = require('../models/exhibition')
const db = require('../../config/db')

const startExhibitions = [
    {
        title:'Utopia Editions',
        description:'Few artists have shaped the scope of contemporary art and influenced a younger generation more than Cynthia Talmadge. Since the early 1990s, her work has epitomized a new kind of subjectivity in photography, pairing intimacy and playfulness with social critique and the persistent questioning of existing values and hierarchies.',
        startDate:'June 1, 2023',
        endDate:'August 31, 2023',
        img:'https://galeriemagazine.com/wp-content/uploads/2020/12/56_Henry_12574_WEB.jpg',
        featured: true,
        artworks: 
            [ 
                {
                    title: 'Sunrisers',
                    description: 'Five-color lithograph on Rives BFK white paper',
                    date: '2022',
                    artist: 'Tunji Adeniyi-Jones',
                    dimensions: '10 x 10',
                    medium: 'Lithography',
                    img: 'https://images.davidzwirner.com/v7/_images_/davidzwirner/artwork/non-dz-artists/tunji-adeniyi-jones/adetu0002_32/adetu0002_32_framed.jpg?w=2000&q=85&org_if_sml=1&force_format=webp',
                    department: 'Prints'
                },
                {
                    title: 'Midnight Voices #1',
                    description: 'Two-color lithograph on Arches Cover white paper',
                    date: '2022',
                    artist: 'Tunji Adeniyi-Jones',
                    dimensions: '10 x 10',
                    medium: 'Lithography',
                    img: 'https://images.davidzwirner.com/v7/_images_/davidzwirner/artwork/non-dz-artists/tunji-adeniyi-jones/adetu0003_9p1/adetu0003_9p1_framed_render.jpg?w=2000&q=85&org_if_sml=1&force_format=webp',
                    department: 'Drawing'
                },
        ]
    },
    {
        title:'Lisa Yuskavage Prints',
        description:'Yuskavage approaches printmaking with the same exacting interest in technique, material, and art history that guides her painting. She has described thinking of her oeuvre as a kind of “generational” family; most of her prints have a direct relationship to her paintings themes and compositions and also appear in important museum collections, including The Museum of Modern Art, New York, the Museum of Fine Arts, Houston, the Perez Art Museum, Miami and The Whitney Museum of American Art, New York.',
        startDate:'Jan 1, 2019',
        endDate:'May 31, 2019',
        img:'https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2021/10/YUSLI0971.jpeg?w=2400&quality=100&ssl=1',
        featured: true,
        artworks: 
            [ 
                {
                    title: 'The Countryside I and II',
                    description: 'Two (2) monoprints with hand coloring and pastel on paper.',
                    date: '2013',
                    artist: 'Lisa Yuskavage',
                    dimensions: '10 7/8 x 8 3/8 inches (27.6 x 21.3 cm). Framed, each: 18 1/8 x 15 1/2 inches (46 x 39.4 cm).',
                    medium: 'Monoprints',
                    img: 'https://images.davidzwirner.com/v7/_images_/davidzwirner/artwork/yuskavage-lisa/yusli0892_vr/lisayuskavage_2012_thecountrysidei_ii.png?w=2000&q=85&org_if_sml=1&force_format=webp',
                    department: 'Prints'
                },
                {
                    title: 'Forces',
                    description: 'Four (4) color lithographs on BFK Rives paper',
                    date: '2007',
                    artist: 'Lisa Yuskavage',
                    dimensions: '37 7/8 x 30 1/8 in (96.2 x 76.5 cm)',
                    medium: 'Lithography',
                    img: 'https://images.davidzwirner.com/v7/_images_/davidzwirner/artwork/yuskavage-lisa/yusli018013vr/lisayuskavage_2007_forces.png?w=2000&q=85&org_if_sml=1&force_format=webp',
                    department: 'Prints'
                },
        ],
    },
    {
        title:'Franz West Furniture',
        description:'For Franz West, art was a social experience. Starting with his signature Passstücke, or Adaptives, in the 1970s, the Austrian-born artist (1947-2012) made sculptures that were meant to be handled and “adapted” by the audience. His furniture works, which he began creating in the early 1980s, only took this intention further. Furniture became an extensive part of his practice by the latter half of the decade—in his mind, these sculptural works were “Adaptives for the human body at rest.”',
        startDate:'April 15, 2015',
        endDate:'June 1, 2015',
        img:'https://d1bc1xn3hygkq4.cloudfront.net/image/4914/og/franz-west-almine-rech-gallery.jpg',
        featured: true,
        artworks: 
            [ 
                {
                    title: 'Sisyphos I',
                    description: 'Papier-mâché, polystyrene, cardboard, varnish, acrylic, and paint can',
                    date: '2002',
                    artist: 'Franz West',
                    dimensions: '10 x 10',
                    medium: 'Varied',
                    img: 'https://images.davidzwirner.com/v7/_images_/davidzwirner/artwork/west-franz/wesfr1365/wesfr1365_v1_0.jpg?w=2000&q=85&org_if_sml=1&force_format=webp',
                    department: 'Sculpture'
                },
                {
                    title: 'Passstücke',
                    description: '',
                    date: '1989',
                    artist: 'Franz West',
                    dimensions: '21 1/2 x 17 3/4 x 6 3/4 inches (54.6 x 45.1 x 17.1 cm)',
                    medium: 'Cast Alumninum and Plaster',
                    img: 'https://images.davidzwirner.com/v7/_images_/davidzwirner/exhibitions/2019/franz-west/wesfr_insta_20.jpg?w=700&q=85&org_if_sml=1&force_format=webp',
                    department: 'Sculpture'
                },
        ]
    },
    {
        title:'Donald Judd Untitled',
        description:'The present work is a stack composed of bands of galvanized steel wrapped around sheets of green plexiglass. Judd devised this configuration in 1967, and went on to produce numerous variations in color and material. As Marianne Stockebrand notes, “The effect is astonishing: color glows in the interstices and, seen as a whole, the vertical stacks look like gently gleaming columns; yet the actual structures appear so light that the metal bands seem to do no more than contain the color radiating outward.”',
        startDate:'Aug 20, 2020',
        endDate:'Dec 1, 2020',
        img:'https://www.moma.org/d/assets/W1siZiIsIjIwMjIvMTIvMjMvdWRkaTc0MzlsX0lOMjQ0NV8wNzRfQ0NDUl9QcmVzc19TaXRlLmpwZyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDExODR4NjY2XiAtZ3Jhdml0eSBDZW50ZXIgLWNyb3AgMTE4NHg2NjYrMCswIl1d/IN2445_074_CCCR-Press%20Site.jpg?sha=f03390b98db6a8af',
        featured: false,
        artworks: 
            [ 
                {
                    title: 'Untitled',
                    description: '',
                    date: '1991',
                    artist: 'Donald Judd',
                    dimensions: `59" x 24' 7 1/4" x 65" (150 x 750 x 165 cm)`,
                    medium: 'Enameled aluminum',
                    img: 'https://www.moma.org/media/W1siZiIsIjI5MjQ3NCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDEwMjR4NzY4XHUwMDNlIl1d.jpg?sha=8acf3398f17de280',
                    department: 'Sculpture'
                },
                {
                    title: 'Untitled (2-L)',
                    description: `Minimalist artist Donald Judd is known primarily for his work as a sculptor, but he began his career as a painter and writer of art criticism and theory. Although his earliest paintings of landscapes and figures are in a traditional style, Judd soon began to work in an abstract mode, and shortly thereafter turned to sculpture. Between 1964 and 1966, he and other artists of his generation developed the vocabulary of Minimalism. His simple forms included boxes made of wood, metal, or industrial plastic placed directly on the floor rather than on bases or pedestals. Of particular interest to Judd was the idea of seriality, embodied in his work by progressions or repetition of standard units, and epitomized by his "stacks," groups of wall-mounted boxes forming columns of alternating solids and voids of equal size. \n Seriality was also present in Judd's work as a printmaker, which began with figurative lithographs in 1951 and eventually grew to include approximately three hundred editions, many of them woodcuts, the most sculptural of all print mediums. In 1961 Judd began a woodcut series depicting variations on a single form, the parallelogram. Over the next eight years, the series of twenty-six prints came together in a variety of ways. Some began as wall sculptures made of unfinished lumber that Judd later decided to ink and print, essentially creating a two-dimensional manifestation of a three-dimensional sculpture. Others, including this Untitled work, were specifically designed as prints, with wood matrices carved according to Judd's design by his father, Roy C. Judd, who served as the printer for this project. After they were printed, these woodblocks were considered sculptural objects. Another series was created by printing twelve of the blocks in cerulean blue. Judd returned to the paralellogram form repeatedly, making similar serial explorations in etching and aquatint.`,
                    date: '1961-69',
                    artist: 'Donald Judd',
                    dimensions: '10 x 10',
                    medium: 'One from a series of twenty-six woodcuts',
                    img: 'https://www.moma.org/media/W1siZiIsIjIxNTEzNyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDEyODB4OTYwXHUwMDNlIl1d.jpg?sha=bf620d9cf11a20a3',
                    department: 'Prints'
                },
        ]
    },
    {
        title:'Still Life of Flowers',
        description:'The subject of an acclaimed exhibition at the Uffizi Gallery in 2020, Giovanna Garzoni (1600-1670) was one of the most renowned and accomplished still-life painters and miniaturists of the seventeenth century. One of the first women artists to master the art of still life painting, Garzoni is recognized as a pioneer of the genre and an important influence on subsequent generations of academic painters and artists',
        startDate:'Oct 1, 2022',
        endDate:'Dec 15, 2022',
        img:'https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2020/03/giovanna-garzoni-HOME.jpg?fit=1000%2C618&quality=100&ssl=1',
        featured: false,
        artworks: 
            [ 
                {
                    title: 'Still life of flowers in a glass vase',
                    description: '',
                    date: '1640 - 1650',
                    artist: 'Giovanna Garzoni',
                    dimensions: '17 5/8 x 14 3/4 inches (44.8 x 37.5 cm)',
                    medium: 'Tempera painted on vellum with traces of black pencil',
                    img: 'https://images.davidzwirner.com/v7/_images_/davidzwirner/artwork/non-dz-artists/giovanna-garzoni/gargi0001/gargi0001_v1.jpg?w=2000&q=85&org_if_sml=1&force_format=webp',
                    department: 'Painting'
                },
                {
                    title: 'Still life with flowers',
                    description: `Many of Garzoni's early commissions were for scientific illustrations, underscoring the growing interest in botany and scientific documentation and exploration during this time. Her early work shows the stylistic influence of Dutch Golden Age painters such as Ambrosius Bosschaert (1573–1621) and Balthasar van der Ast (1593–1657). In contrast with the dark grounds on which those artists tended to represent their subjects, Garzoni often depicted her floral bouquets against pale, light-filled backdrops`,
                    date: '1617',
                    artist: 'Giovanna Garzoni',
                    dimensions: '17 5/8 x 14 3/4 inches (44.8 x 37.5 cm)',
                    medium: 'Oil Painting',
                    img: 'https://images.davidzwirner.com/v7/_images_/davidzwirner/viewingroom/2022/exceptional-works-giovanna-garzoni/final/web-ambrosius.jpg?w=900&q=85&org_if_sml=1&force_format=webp',
                    department: 'Painting'
                },
        ]
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
