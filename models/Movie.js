const mongoose =require("mongoose");

const MoviesSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title:{
        type: String,
        required: true,
        unique: true,
    },
    rating:{
        type: Number,
        default: 5,
        min: 0,
        max: 10,
    },
    director: {
        type: String,
        required: true,
    },
     releaseDate: Date.parse(String),
    
});

module.exports = mongoose.model("Movie", MoviesSchema);