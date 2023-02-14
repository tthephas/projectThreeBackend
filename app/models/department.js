const mongoose = require('mongoose')


const departmentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},

	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Department', departmentSchema)

const startDepartments = [
	{
        name:'American Decorative Arts',
        img:'app/images/deptAmericanDecorative1.jpeg'
    },
	{
        name:'Ancient Near Eastern Art',
        img:'app/images/deptAncientNearEast.jpeg'
    },
	{
        name:'Arms and Armor',
        img:'app/images/deptArmsArmor.jpeg'
    },
	{
        name:'Arts of Africa, Oceania, and the Americas',
        img:'app/images/deptAfricaOceania.jpeg'
    },
	{
        name:'Asian Art',
        img:'app/images/deptAsianArt.jpeg'
    },
	{
        name:'The Cloisters',
        img:'app/images/deptTheCloisters.jpeg'
    },
	{
        name:'The Costume Institute',
        img:'app/images/deptTheCostume.jpeg'
    },
	{
        name:'Drawings and Prints',
        img:'app/images/deptDrawingAndPrint.jpeg'
    },
	{
        name:'Egyptian Art',
        img:'app/images/deptEgyptianArt.jpeg'
    },
	{
        name:'European Paintings',
        img:'app/images/deptEuroPaintings.jpeg'
    },
	{
        name:'European Sculpture and Decorative Arts',
        img:'app/images/deptEuroSculptureDecorative.jpeg'
    },
	{
        name:'Greek and Roman Art',
        img:'app/images/deptGreekRomanArt.jpeg'
    }

]
