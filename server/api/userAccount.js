const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

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

