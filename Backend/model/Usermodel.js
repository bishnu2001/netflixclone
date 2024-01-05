const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        max:50,
        unique:true,
        required:true,
    },
    likedMovies:Array,
})
const Usermodel=mongoose.model("users",userSchema);
module.exports=Usermodel;