import express from "express";
import {
  create_user,
  get_user,
  suspend_user,
  unsuspend_user,
  delete_user,
} from "../controllers/UserController";

const router = express.Router();
router.post("/", create_user);
router.get("/:id", get_user);
router.post("/:id/suspend", suspend_user);
router.post("/:id/unsuspend", unsuspend_user);
router.delete("/:id", delete_user);

export default router;
