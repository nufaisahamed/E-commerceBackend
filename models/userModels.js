const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:String,
    email:String,
    role:{
        type:String,
        default:"user"
    }
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10);
    
});
const userModel = mongoose.model("user",userSchema);
module.exports = userModel;