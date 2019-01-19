var express = require('express')
var router = express.Router();
var os = require('os')
var Movie = require('../model/movies')

router.get('/movies', (req, res, next) => {
    Movie.find((err, docs) => {
        if (err) {
            res.json({ 'View all movies error is ': err })
        }
        else {
            res.json(docs)
        }
    })
})
router.get('/movies/:id', (req, res, next) => {
    Movie.findById({ _id: req.params.id }, (err, doc) => {
        if (err) {
            res.json({ 'View by ID movie error is ': err })
        }
        else {
            res.json(doc)
        }
    })
})
router.post('/movies', (req, res, next) => {

    var newMovie = new Movie(req.body)
    newMovie.save((err, doc) => {
        if (err) {
            res.json({ 'Save movie error is ': err })
        }
        else {
            res.json(doc)
        }
    })
})
router.put('/movies/:id', (req, res, next) => {
    Movie.findByIdAndUpdate({ _id: req.params.id }, (req.body), (err, doc) => {
        if (err) {
            res.json({ 'Update movie error is ': err })
        }
        else {
            res.json(doc)
        }
    })
})

router.delete('/movies/:id', (req, res, next) => {
    Movie.findByIdAndRemove({ _id: req.params.id }, (err, doc) => {
        if (err) {
            res.json({ 'Delete movie error is ': err })
        }
        else {
            res.json({ msg: "Successfully deleted" })
        }
    })
})
router.get('/movies/:id/comments', (req, res, next) => {
    Movie.findById({ _id: req.params.id },'reviews.comments reviews.rating', (err, doc) => {
        if (err) {
            res.json({ 'Comment return error is ': err })
        }
        else{
            
            res.json(doc)
        }
    })
})

router.get('/movies/top/:count', (req,res,next)=>{
    Movie.aggregate([{$unwind:'$reviews'},{$group:{_id:'$title',AvgRating:{$avg:'$reviews.rating'}}},{$sort:{AvgRating:-1}},{$limit:parseInt(req.params.count)}],(err,docs)=>{
        if(err){console.log(err)}
        else{
            res.json(docs);
        }
    })
})


router.put('/movies/:id/comments', (req, res, next) => {
    Movie.findByIdAndUpdate({ _id: req.params.id }, {
        $push: { "reviews": {$each: (req.body)}}
    }, (err, doc) => {
        res.json(doc)
    })
})

module.exports = router;

