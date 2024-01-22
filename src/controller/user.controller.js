import { User } from "../models/user.model.js";


// controller for save user to db
const saveUserToDb = async (req, res) => {
    try {
        const user = req.body;

        const isExists = await User.findOne({ email: user.email });

        if (isExists) {
            res.status(400).json({
                message: "User already exists",
                success: false,
            });
        }

        await User.create(user);

        res.status(200).json({
            message: "User saved to database",
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error during saving user to db",
            success: false,
        });
    }
};

export { saveUserToDb };
