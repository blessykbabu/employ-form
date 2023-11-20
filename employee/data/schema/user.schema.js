import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
   
    date: {
        type: String,
        required: true
    },
  
    dis: {
        type: String,
        required: true
    },
  
    state: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
  
    phn: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    

});

export default mongoose.model.candidates || mongoose.model("candidate", schema);