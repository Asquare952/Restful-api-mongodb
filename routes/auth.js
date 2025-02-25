import express from "express";
import {
  registerUser,
  getAllUsers,
  getUser,
  loginUser,
  updateUser,
  deleteUser,
} from "../controller/auth.js";

const router = express.Router()

router.post("/auth/register", registerUser)

router.post("/auth/login", loginUser);

router.get("/auth/users", getAllUsers);

router.get("/auth/:id", getUser);

router.put("/auth/:id", updateUser);

router.delete("/auth/:id", deleteUser);

export default router;