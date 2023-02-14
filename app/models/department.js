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
        img:'https://images.metmuseum.org/CRDImages/as/web-large/DP-703-001.jpg'
    },
	{
        name:'Ancient Near Eastern Art',
        img:'https://images.metmuseum.org/CRDImages/an/web-large/DP-23786-001.jpg'
    },
	{
        name:'Arms and Armor',
        img:'https://images.metmuseum.org/CRDImages/aa/web-large/DP160338.jpg'
    },
	{
        name:'Arts of Africa, Oceania, and the Americas',
        img:'https://images.metmuseum.org/CRDImages/ao/web-large/DP242328.jpg'
    },
	{
        name:'Asian Art',
        img:'https://images.metmuseum.org/CRDImages/as/web-large/DP151393.jpg'
    },
	{
        name:'The Cloisters',
        img:'https://images.metmuseum.org/CRDImages/cl/web-large/DP366903.jpg'
    },
	{
        name:'The Costume Institute',
        img:'https://images.metmuseum.org/CRDImages/ci/web-large/45.168.12_CP2.jpg'
    },
	{
        name:'Drawings and Prints',
        img:'https://images.metmuseum.org/CRDImages/dp/web-large/DP-21327-001.jpg'
    },
	{
        name:'Egyptian Art',
        img:'https://images.metmuseum.org/CRDImages/eg/web-large/DP-20494-001.jpg'
    },
	{
        name:'European Paintings',
        img:'https://images.metmuseum.org/CRDImages/ep/web-large/DP169566.jpg'
    },
	{
        name:'European Sculpture and Decorative Arts',
        img:'https://images.metmuseum.org/CRDImages/es/web-large/DP-975-006.jpg"'
    },
	{
        name:'Greek and Roman Art',
        img:'https://images.metmuseum.org/CRDImages/gr/web-large/DT4136.jpg'
    }

]
