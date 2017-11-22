const router = require('express').Router()
const {Seen} = require('../db/models')
module.exports = router

//Get all Seens belonging to the logged-in user-- requires the user to be logged in so the currentUser's id can be passed to req.body
router.get('/:userId/:petId', (req, res, next) => {
    Seen.findAll({
        where: {
            userId: req.params.userId,
            petId: req.params.petId
        }
    })
    .then(seens => res.json(seens))
    .catch(next)
})

//Add a Seen to a logged-in user-- expects an object with petId and userId
router.post('/', (req, res, next) => {
    Seen.create({
        petId: req.body.petId,
        userId: req.body.userId
    })
    .then(() => res.status(201))
    .catch(err => console.log(err))
})
