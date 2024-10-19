const express = require("express");
const BlogsModel = require("../models/BlogsModel");

const blogsRoute = express.Router();

blogsRoute.post("/", async (req, res) => {
  const blogModel = new BlogsModel({
    name: req.body.name,
    content: req.body.content,
    author: req.body.author,
  });

  try {
    const blog = await blogModel.save();

    return res.status(201).send({
      message: "blog created",
      statusCode: 201,
      blog,
    });
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
});

blogsRoute.get("/", async (req, res) => {
  try {
    const blogs = await BlogsModel.find();

    if (!blogs || blogs.length === 0) {
      return res.status(404).send({
        statusCode: 404,
        message: "No blog found",
      });
    }

    return res.status(200).send({
      statusCode: 200,
      message: "blogs found successfully",
      blogs,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
      statusCode: 500,
    });
  }
});

module.exports = blogsRoute;
