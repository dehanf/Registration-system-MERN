import mongoose from "mongoose";

const speakerSchema = new mongoose.Schema({
    firstname: {
        type: String,   
        required: true
    },
    lastname : {
        type: String,   
        required: true
    },
    organisation: {
        type: String,   
        required: true
    },
    designation: {
        type: String,   
        required: true
    },
    email: {
        type: String,   
        required: true
    } ,
     Number : {
        type: String,   
        required: true
    }
})

const Speaker = mongoose.model('Speaker', speakerSchema);
export default Speaker;