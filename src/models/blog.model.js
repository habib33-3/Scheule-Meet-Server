import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    blogUserName: {
        type: String,
        required: true,
    },
    blogTitle: {
        type: String,
        required: true,
    },
    blogMessage: {
        type: String,
        required: true,
    },
    blogUserEmail: {
        type: String,
        required: true,  
    }, 
    blogUserImage: {

          type: String,
        required: true, 
    },
    blogImage: {

    type: String,
    required: true, 
  },

  blogCategorys: {

    type: String,
    required: true, 
  },

  blogTime: {
    months: {type: String, required: true,},
    seconds: {type: String, required: true,},
    minutes: {type: String, required: true,},
    dates: {type: String, required: true,},
    },

});

export const blogModel = model("blog", blogSchema);
