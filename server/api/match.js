const router = require('express').Router()
const {Match} = require('../db/models')
module.exports = router

//Get all matches belonging to the logged-in user
router.get('/:userId', (req, res, next) => {
    Match.findAll({
        where: {
            userId: req.params.userId
        }
    })
    .then(matches => res.json(matches))
    .catch(next)
})

//Add a match to a logged-in user
router.post('/:userId', (req, res, next) => {
    Match.create({
        petId: req.body.petId,
        userId: req.params.userId
    })
    .then(() => res.sendStatus(200))
    .catch(next)
})

//Delete a match
router.delete('/:userId', (req, res, next) => {
    Match.destroy({
        where: {
            petId: req.body.petId,
            userId: req.params.userId
        }
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})