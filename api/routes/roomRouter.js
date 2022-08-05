const express = require("express");
const {
  createRoom,
  getRoom,
  closeRoom,
  addUserToRoom,
  removeUserFromRoom,
  userChangeEstimate,
} = require("../controllers/roomController");

const router = express.Router();

router.post("/", createRoom);
router.get("/:roomId", getRoom);
router.delete("/:roomId", closeRoom);
router.post("/:roomId/user", addUserToRoom);
router.delete("/:roomId/user", removeUserFromRoom);
router.put("/:roomId/user/estimate", userChangeEstimate);

module.exports = router;
