var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    reviewer_name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    dateof_review: { type: Date, required: true },
    comments: { type: String }
})

var movieSchema = new Schema({
    title: { type: String, required: true, unique: true },
    year: { type: String, required: false },
    runtime: { type: String, required: false },
    genre: { type: Array, required: true },
    actors: { type: Array, required: false },
    directors: { type: Array, required: false },
    writers: { type: Array, required: false },
    music: { type: Array, required: false },
    singers: { type: Array, required: false },
    description: { type: String, required: false },
    language: { type: Array, required: false },
    awards: { type: Array, required: false },
    poster: { type: String, required: false },
    trailer: { type: String, required: false },
    production: { type: String, required: false },
    reviews: { type: [reviewSchema], required: false }
})

module.exports = mongoose.model('movie', movieSchema)