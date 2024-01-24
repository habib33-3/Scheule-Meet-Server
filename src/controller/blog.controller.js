import { blogModel } from "../models/user.model.js";

// get all blog data
const getBlogs = async (req, res) => {
    try {
        const result = await blogModel.find();

        res.send({ result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error during saving user to db",
            success: false,
        });
    }
};

export { getBlogs };
