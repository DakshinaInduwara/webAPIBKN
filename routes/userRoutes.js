import express from "express";
import {
  getAllUsers,
  addregisterUser,
  addloginUser,
  updateUser,
  updateAdminUser,
  deleteUser,
  deleteAdminUser,
} from "../controllers/userContoller.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/register", addregisterUser);
router.post("/login", addloginUser);
router.put("/users/:id", updateUser);
router.put("/admin/users/:id", updateAdminUser);
router.delete("/delusers/:id", deleteUser);
router.delete("/admin/delusers/:id", deleteAdminUser);

export default router;
