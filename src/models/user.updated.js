import { Schema, model } from "mongoose";

const UserUpSchema = new Schema(
   
{

    name: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true,

      },
      useremail: {
        type: String,
        required: true,
  
      },
      userimage: {
        type: String,
        required: true
      },
      useraddress: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        zipcode: {type: String, required: true},
        country: {type: String, required: true}
      },
      userabout: {
        type: String,
        required: true
      },
      sociallinks: {
        twitter: {type: String, required: true},
        facebook: {type: String, required: true},
        linkedin: {type: String, required: true},
        pinterest: {type: String, required: true}
      },

  
}
    
   
);

export const UserUpdatedModel = model("userInfo", UserUpSchema);
