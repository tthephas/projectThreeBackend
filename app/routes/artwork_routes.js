// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')


// Bring in axios
const axios = require('axios')
require('dotenv').config()

// pull in Mongoose model for examples
// const Artwork = require('../models/artwork')
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
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()


// Routes for adding artworks to exhibitions

router.post('/artworks/:exhibitionId', removeBlanks, (req, res, next) => {
    
    const artwork = req.body.artworks
    
    const exhibitionId = req.params.exhibitionId

    Exhibition.findById(exhibitionId)

        .then(handle404)

        .then(exhibition => {
            console.log('the exhibition: ', exhibition)
            console.log('the artwork: ', artwork)
            exhibition.artworks.push(artwork)

            return exhibition.save()
        })

        .then(exhibition => res.status(201).json({ exhibition: exhibition }))

        .catch(next)
})




module.exports = router
