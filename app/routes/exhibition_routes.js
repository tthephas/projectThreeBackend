// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// Bring in axios
const axios = require('axios')
require('dotenv').config()

// pull in Mongoose model for examples
const Exhibition = require('../models/exhibition')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
const { AggregationCursor } = require('mongodb')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET `/exhibitions/`
router.get('/exhibitions', (req, res, next) => {
    Exhibition.find()
        .populate('owner')
        .then((exhibitions) => {
            return exhibitions.map((exhibition) => exhibition.toObject())
        })
        .then((exhibitions) => res.status(200).json({ exhibitions: exhibitions}))
        .catch(next)
})

// SHOW
// GET `/exhibitions/:id`
router.get('/exhibitions/:id', (req, res, next) => {
    Exhibition.findById(req.params.id)
        .populate('owner')
        .then(handle404)
        .then((exhibition) => res.status(200).json({ exhibition: exhibition.toObject() }))
        .catch(next)
})


// CREATE
// POST `/exhibitions`
router.post('/exhibitions', requireToken, (req, res, next) => {
    // set owner of the exhibition to be current user
    req.body.exhibition.owner = req.user.id

    Exhibition.create(req.body.exhibition)
        .then((exhibition) => {
            res.status(201).json({ exhibition: exhibition.toObject() })
        }) 
        .catch(next)
})

// UPDATE
// PATCH `/exhibitions/:Id`

// DELETE -> Delete 
// DELETE `/exhibitions/:Id`

module.exports = router