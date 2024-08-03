import { mongoose } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const OrderSchema = new mongoose.Schema(
    {
        OrderPrice:{
            type:Number,
            required:true
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        OrderItems:{
            type: [orderItemSchema]
        },
        address:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:["PENDING", "CANCELLED", "DELIVERED"], // enum | choices to be shown
            default:"PENDING"
        }
    },{timestamps:true}
);



export const Order = mongoose.model("Order", OrderSchema)