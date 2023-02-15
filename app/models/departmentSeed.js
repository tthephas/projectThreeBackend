const mongoose = require('mongoose')
const Department = require('./department')
const db = require('../../config/db')

const startDepartments = [
	{
        name:'Art of the Americas',
        img:'https://images.metmuseum.org/CRDImages/as/web-large/DP-703-001.jpg'
    },
	{
        name:'Egyptian and Ancient Near Eastern Art',
        img:'https://images.metmuseum.org/CRDImages/an/web-large/DP-23786-001.jpg'
    },
	{
        name:'Medieval Art',
        img:'https://piction.clevelandart.org/cma/ump.di?e=AF4DFCFDE9FEC3C8F5E6D246CC90B808D8EDA82B01A740486AB02ACC1CF64F9B&s=24247294&se=2001822299&v=2&f=1942.635_o5.jpg'
    },
	{
        name:'Oceania',
        img:'https://images.metmuseum.org/CRDImages/ao/web-large/DP242328.jpg'
    },
	{
        name:'Chinese Art',
        img:'https://images.metmuseum.org/CRDImages/as/web-large/DP151393.jpg'
    },
	{
        name:'Japanese Art',
        img:'https://piction.clevelandart.org/cma/ump.di?e=FD5560D91BB24FB0B7DA78DA5AC528DEF50AF958A1502E9022A1BF6977F74D7C&s=24247294&se=1223219855&v=5&f=1963.262_o5.jpg'
    },
    {
        name:'Korean Art',
        img:'https://piction.clevelandart.org/cma/ump.di?e=6D7D3CBFAC979991356D701D4F1BA15894BAAF7D1B5F07FBB203D70B193B60EE&s=24247294&se=1619745516&v=3&f=1997.148_o5.jpg'
    },
	{
        name:'Contemporary Art',
        img:'https://piction.clevelandart.org/cma/ump.di?e=9B669F684F89A064F4074416940819D2B91F3969610EE988ED49D9E294049969&s=24247294&se=1296081927&v=0&f=2017.128_o5.jpg'
    },
	
	{
        name:'Islamic Art',
        img:'https://piction.clevelandart.org/cma/ump.di?e=F053976457EA4913AE6A00A3AD8AD3E44D083F3CD2949848F54C7B70EA04AA52&s=24247294&se=1929723109&v=6&f=1988.101_o5.jpg'
    },
	{
        name:'European Painting and Sculpture',
        img:'https://images.metmuseum.org/CRDImages/ep/web-large/DP169566.jpg'
    },
	{
        name:'Decorative Art and Design',
        img:'https://piction.clevelandart.org/cma/ump.di?e=29A2E53156B86C9E39923D890503B85E08B9F99C5D2FC57CE9A05D6B8DFA92EB&s=24247294&se=897422329&v=1&f=%5Cd6260%5Cu220562608%5C1984.58det04_o5.jpg'
    },
	{
        name:'Greek and Roman Art',
        img:'https://images.metmuseum.org/CRDImages/gr/web-large/DT4136.jpg'
    }

]

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Department.deleteMany()
            .then(deletedDepartments => {
                console.log('the deleted departments:', deletedDepartments)
                // now we add our departments to the db
                Department.create(startDepartments)
                    .then(newDepartments => {
                        console.log('the new departments', newDepartments)
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
