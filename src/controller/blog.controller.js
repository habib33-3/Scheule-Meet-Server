import { blogModel } from "../models/blog.model.js";



//! get specific blog , baed on id ( get single blog )
const SingleBlog = async (req, res) => {
const { id } = req.params;
const result = await blogModel.find({_id: id});
  res.send(result)
};

const addBlog = async (req, res) => {
const blog = req.body;
const result = await blogModel.create(blog);
res.send(result)

};


const getBlogs = async (req, res) => {
const result = await blogModel.find();
res.send(result)


};





export {addBlog, getBlogs, SingleBlog };
