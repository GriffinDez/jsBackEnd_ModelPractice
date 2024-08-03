import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type:String,
            required:true,
            unique:true,
            lowerCase:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:[true, "password is required"],
        }
    }, {timestamps:true}
);


// exports the schema to db & creates the model in db on the basis of userSchema
export const User = mongoose.model("User", userSchema)


