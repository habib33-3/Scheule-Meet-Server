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

//! get specific blog , baed on id ( get single blog )
const getBlog = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("from single blog rtoute ");
        res.send({ id: id });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error during getting blogs from db",
            success: false,
        });
    }
};

export { getBlogs, getBlog };
