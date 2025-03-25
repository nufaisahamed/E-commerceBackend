const mangoose = require('mongoose');''
const orderSchema = new mangoose.Schema({
    orderID:{
        type:String,
        default:()=>Date.now(),

    },
    product:{
        type:mangoose.Schema.Types.ObjectId,
        ref:'Product',
       
    },
    user:{
        type:mangoose.Schema.Types.ObjectId,
        ref:'user',
    },
    totalPrice:Number,
});
const order = mangoose.model('order',orderSchema);
module.exports = order;