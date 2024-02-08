import { UserUpdatedModel } from "../models/user.updated.js";


const allUsersData = async (req, res) => {
    try {    
     const checkUpdatedUser = await UserUpdatedModel.findOne();

 res.send(checkUpdatedUser)



    } 
    
    catch (error) {
        console.error("Error during meeting create", error);
        res.status(500).json({
            message: "Error during meeting create",
            success: false,
        });
    }
};

export { allUsersData };