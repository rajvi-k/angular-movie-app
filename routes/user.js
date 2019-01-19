var express = require('express')
var router = express.Router();
var User = require('../model/user')

router.get('/users', (req, res, next) => {
    User.find((err, docs) => {
        if (err) {
            res.json({ 'View all users error is ': err })
        }
        else {
            res.json(docs)
        }
    })
})
router.post('/users/login/', (req, res, next) => {
    User.find({username: req.body.username, password:req.body.password} , (err, doc) => {
        if (err) {
            res.json({ 'Login user error is ': err })
        }
        else {
             if (!doc.length){
                res.json({ "Authenticated": false})
             }
             else{
                res.json({ "Authenticated": true, "doc":doc })  
             }
        }
    })
})
router.post('/users/signup', (req, res, next) => {
    var newUser = new User(req.body)
    newUser.save((err, doc) => {
        if (err)
            res.json({ "New user error is ": err })
        else
            res.send(JSON.stringify(doc) + " new user successfully created")
    })
})
module.exports = router;

