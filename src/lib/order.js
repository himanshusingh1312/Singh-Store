import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
    email:{type:String, required:true},
    orderid:{type:String},
    cart:{type:Object, required:true},
    address:{ type:String , required: true},
    amount:{type:Number,required:true},
    pincode:{type:Number,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    phone:{type:Number,required:true},
    status:{type:String, default:'Pending'}
},{timestamps:true });

export const Order =mongoose.models.Order|| mongoose.model("Order",OrderSchema);