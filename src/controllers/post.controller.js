const post_service = require("../services/post.service");
const { createToken } = require("../middleware/auth");

const createpost = async (req, res) => {
  const reqBody = req.body;

  try {
    const post = await post_service.createpost(reqBody);
    res
      .status(200)
      .json({ message: "post created successfully", data: post });
  } catch (error) {
    console.error("Error during post registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const postget = async (req, res) => {
  try {

    const post = await post_service.getpost();

    res.status(200).json({ message: "post list", data: post });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const postdelete = async (req, res) => {
  try {
    const postid = req.params.postId;
    const postExists = await post_service.findById(postid);
    if (!postExists) {
      res.json({ message: "post not found!" });
    }
    const deletedpost = await post_service.deletedpost(postid);
    res.status(200).json({ message: "post deleted successfully" });
  } catch (error) {
    console.error("Error during post deletion:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const Idpost = async (req, res) => {
  try {
    const postid = req.params.postId;
    const postExists = await post_service.findById(postid);
    if (!postExists) {
      res.json({ message: "post not found!" });
    }
    const post = await post_service.postbyid(postid);
    res.status(200).json({ message: "post  successfully", data: post });
  } catch (error) {
    console.error("Error during post deletion:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const postupdate = async (req, res) => {
  try {
    const postid = req.params.postId;
    const postExists = await post_service.findById(postid);
    if (!postExists) {
      res.json({ message: "post not found!" });
    }

    const body = {};

    if (req.body.post_Titel) {
      body.post_Titel = req.body.post_Titel;
    }

    if (req.body.post_dtels) {
      body.post_dtels = req.body.post_dtels;
    }

    if (req.body.post_By) {
        body.post_By = req.body.post_By;
      }


    const updatepost = await post_service.updatepost(postid, body);
    res
      .status(200)
      .json({ message: "post updated successfully", post: updatepost });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createpost,
  postget,
  postdelete,
  Idpost,
  postupdate,
};
