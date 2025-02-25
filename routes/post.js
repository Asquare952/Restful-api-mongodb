import express from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from "../controller/post.js";

const router = express.Router();

router.post("/post/create", createPost);

router.get("/post/create", createPost);

router.get("/post/posts", getPosts);

router.get("/post/:id", getPost);

router.patch("/post/:id", updatePost);

router.delete("/post/:id", deletePost)

export default router;
