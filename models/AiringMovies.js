const mongoose =require("mongoose");

const airingMoviesSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title:{
        type: String,
        required: true,
        unique: true,
    },
    ticket_price:{
        type: Number,
        min: 10,
        max: 25,
    },
    director: {
        type: String,
        required: true,
    },
     releaseDate: Date.parse(String),
     
     subtitles:{
         type:Boolean
     },

     cinema:{
        type: String,
        required: true,
     },
     
     available_till: Date.parse(String)
    
});

module.exports = mongoose.model("AiringMovie", airingMoviesSchema);