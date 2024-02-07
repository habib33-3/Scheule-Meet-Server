// import { ObjectId } from "mongodb";
import { ObjectId } from "mongodb";
import { UserUpdatedModel } from "../models/user.updated.js";


const userUpdateds = async (req, res) => {
    // try {
 const userUpdateded = req.body;
const checkAfterUpdateMerk = await UserUpdatedModel.findOne({useremail: userUpdateded.useremail});

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



if(checkAfterUpdateMerk){
const userID = {_id: new ObjectId(checkAfterUpdateMerk._id)};
const result = await UserUpdatedModel.updateOne({userID}, userUpdatedInformation, {upsert: true});
console.log(result)
 
}
else {

console.log("not")
    
}


// const filter = {_id: new ObjectId(checkAfterUpdateMerk._id)}




//         const userUpdatedInformation = {

//           $set: {
//             name: userUpdateded.name,
//             username: userUpdateded.username,
//             useremail: userUpdateded.useremail,
//             userimage: userUpdateded.userimage,
//             useraddress: {
//               street: userUpdateded.useraddress.street,
//               city: userUpdateded.useraddress.city,
//               state: userUpdateded.useraddress.state,
//               zipcode: userUpdateded.useraddress.zipcode,
//               country: userUpdateded.useraddress.country,
//             },
//             userabout: userUpdateded.userabout,
//             sociallinks: {
//               twitter: userUpdateded.sociallinks.twitter,
//               facebook: userUpdateded.sociallinks.facebook,
//               linkedin: userUpdateded.sociallinks.linkedin,
//               pinterest: userUpdateded.sociallinks.pinterest
//             }
//           }
          
           

        



//           };


//     await UserUpdatedModel.updateOne(filter, userUpdatedInformation, {upsert: true}, (error) => {

//           if(error){

//             res.status(500).json({err: "error"})
//           }
// else {

//      res.status(200).json({ok: "ok"})
// }

//         });
        // res.send(updateds)
        
  


          
    //  const checkUpdatedUser = await UserUpdatedModel.findOne({useremail: userUpdateded.useremail});




    //     await UserUpdatedModel.updateMany({}, { $set:  userUpdatedInformation});
    //      res.status(200).json({
    //         message: "updated user successfully",
    //         success: true,
    //     });
     
  


    // } 
    
    // catch (error) {
    //     console.error("Error during meeting create", error);
    //     res.status(500).json({
    //         message: "Error during meeting create",
    //         success: false,
    //     });
    // }
};

export { userUpdateds };