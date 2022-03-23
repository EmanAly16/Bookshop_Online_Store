const mongoose = require("mongoose")
const validator = require("validator")
const bookSchema = new mongoose.Schema({
  title:{
    type:String,
    trim:true,
    required:true
},
  auther:{
    type:String,
    trim:true,
    required:true
},
  img:{
   type:String,
   trim:true
},
  description:{
    type:String,
    trim:true,
    required:true
},
 file:{
    type:String,
    trim:true,
    required: () => this.postType == "img"
}
},{ timestamps: true })

const Book = mongoose.model('Book', bookSchema)
module.exports = Book