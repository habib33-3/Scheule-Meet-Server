import { Schema, model } from "mongoose";

const UserUpSchema = new Schema(
   
  {

    name: String,
    username: String,
    useremail: String,
    userimage: String,
    useraddress: {
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    userabout: String,
    sociallinks: {
        twitter: String,
        facebook: String,
        linkedin: String,
        pinterest: String
    }
  }


);

export const UserUpdatedModel = model("userInfo", UserUpSchema);
