import { Router } from "express";
import { userUpdateds } from "../controller/userUpdate.controller.js";
import { allUsersData } from "../controller/userAllData.controller.js";


const userUpdatedRouter = Router();

// route for save user on db
userUpdatedRouter.post("/updatecreate", userUpdateds);
userUpdatedRouter.get("/alluser", allUsersData);


export default userUpdatedRouter;
