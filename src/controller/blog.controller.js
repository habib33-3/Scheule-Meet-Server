import { blogModel } from "../models/blog.model.js";

// get all blog data
const getBlogs = async (req, res) => {
    try {
        const result = await blogModel.find();

        res.send({ result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error during getting blogs from db",
            success: false,
        });
    }
};

export { getBlogs };
