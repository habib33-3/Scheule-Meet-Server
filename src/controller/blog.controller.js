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

// get blog by eamil

const SingleBlogByEmailName = async (req, res) => {
    try {
        const { UserEmail } = req.params;
        const result = await blogModel.find({ blogUserEmail: UserEmail });
        
        if (result) {
            return res.status(200).json({
                message: "Blog data loaded successfully",
                success: true,
                result,
            });
        } else {
            return res.status(404).json({
                message: "Blog not found",
                success: false,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};


// post the blog

const addBlog = async (req, res) => {
    const blog = req.body;
    const result = await blogModel.create(blog);
    res.send(result);
};

// get all blog

const getBlogs = async (req, res) => {
    const result = await blogModel.find();
    res.send(result);
};

export { addBlog, getBlogs, SingleBlog , SingleBlogByEmailName };
