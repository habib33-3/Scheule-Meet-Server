// import { ObjectId } from "mongodb";
import { ObjectId } from "mongodb";
import { UserUpdatedModel } from "../models/user.updated.js";


const userUpdateds = async (req, res) => {
    // try {
 const userUpdateded = req.body;
const checkAfterUpdateMerk = await UserUpdatedModel.findOne({useremail: userUpdateded.useremail});
const filter = {_id: new ObjectId(checkAfterUpdateMerk._id)}
const options = {upsert: true}

      const userUpdatedInformation = {

          $set: {
            name: userUpdateded.name,
            username: userUpdateded.username,
            useremail: userUpdateded.useremail,
            userimage: userUpdateded.userimage,
            useraddress: {
              street: userUpdateded.useraddress.street,
              city: userUpdateded.useraddress.city,
              state: userUpdateded.useraddress.state,
              zipcode: userUpdateded.useraddress.zipcode,
              country: userUpdateded.useraddress.country,
            },
            userabout: userUpdateded.userabout,
            sociallinks: {
              twitter: userUpdateded.sociallinks.twitter,
              facebook: userUpdateded.sociallinks.facebook,
              linkedin: userUpdateded.sociallinks.linkedin,
              pinterest: userUpdateded.sociallinks.pinterest
            }
          }
          


        
          };

          const update = await UserUpdatedModel.updateOne(filter, userUpdatedInformation, options)
          res.send(update)
          console.log(update)



};

export { userUpdateds };