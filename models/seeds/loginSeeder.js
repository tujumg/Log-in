const Restaurant = require('../Account')
const db = require('../../config/mongoose')
const data = [
    {
        firstName: 'Tony',
        email: 'tony@stark.com',
        password: 'iamironman'
    },
    {
        firstName: 'Steve',
        email: 'captain@hotmail.com',
        password: 'icandothisallday'
    },
    {
        firstName: 'Peter',
        email: 'peter@parker.com',
        password: 'enajyram'
    },
    {
        firstName: 'Natasha',
        email: 'natasha@gamil.com',
        password: '*parol#@$!'
    },
    {
        firstName: 'Nick',
        email: 'nick@shield.com',
        password: 'password'
    }
]
db.once('open', () => {
    console.log('mongodb connected!')
    Restaurant.create(data)
        .then(() => {
            console.log('MongoDB loginSeeder created!')
        })
        .catch(error => console.log(error))
        .finally(() => db.close())
})