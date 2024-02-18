import { blogModel } from "../models/blog.model.js";

//! get specific blog , baed on id ( get single blog )
const SingleBlog = async (req, res) => {

    try {
        const { id } = req.params;
        const result = await blogModel.findOne({ _id: id });
        return res.status(200).json({
            message: "Event data loaded successfully",
            success: true,
            result,
        });
    }
    catch (error) {
        console.log(error)
        res.send([])
    }
};



const addBlog = async (req, res) => {
    const blog = req.body;
    const result = await blogModel.create(blog);
    res.send(result);
};

const getBlogs = async (req, res) => {
    const result = await blogModel.find();
    res.send(result);
};

export { addBlog, getBlogs, SingleBlog };
