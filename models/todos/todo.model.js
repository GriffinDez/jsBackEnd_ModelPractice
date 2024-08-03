import { mongoose } from "mongoose";
import { subTodo } from "./sub_todo.model";
import {  } from "";

const todoSchema = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
        },
        complete:{
            type:Boolean,
            default:false,
        },
        createdBy:{
            // type:[UserSchema],
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        subTodo:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'SubTodo'
            }
        ]
    }, {timestamps:true}
)



export const todo = mongoose.model("Todo", todoSchema)