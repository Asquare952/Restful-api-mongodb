import Post from "../model/Post.js";

export const createPost = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const likes = Math.floor(Math.random() * 100);
    const dislike = Math.floor(Math.random() * 100);
    const newPost = new Post({
      title,
      description,
      author,
      likes,
      dislike,
    });
    const savedPost = await newPost.save();
    return res.status(201).json({
      message: "Post Successfully Created",
      savedPost,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    const updatedPost = await Post.findByIdAndUpdate(id, update, { new: true });

    if (!updatedPost) {
      return res.status(404).json({ error: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.status(200).json({
      message: "User Successfuly Deleted",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

