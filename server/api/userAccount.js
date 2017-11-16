const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//get a single user (to set them as current user on state)
// router.get('/:userId', (req, res, next) => {
//     User.findById(req.params.userId)
//     .then(user => res.json(user))
//     .catch(next)
// })

//create a new user and return them to set as current user on state
// router.post('/', (req, res, next) => {
//     User.create(req.body)
//     .then(newUser => res.json(newUser))
//     .catch(next)
// })

//update a user's profile
router.put('/:userId', (req, res, next) => {
    User.findById(req.params.userId)
    .then(user => {
        user.update(req.body)
        .then(editedUser => res.json(editedUser))
    })
    .catch(next)
})

//delete a user
router.delete('/:userId', (req, res, next) => {
    User.destroy({
        where: {
            id: req.params.userId
        }
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

