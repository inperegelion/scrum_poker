const asyncHandler = require("express-async-handler");
const { Room, User } = require("../models/roomModel");

// @route POST /api/room
const createRoom = asyncHandler(async (req, res) => {
  const room = await Room.create({ name: "Yevhen" });
  res.json({ room });
});

// @route GET /api/room/:roomId
const getRoom = asyncHandler(async (req, res) => {
  const { roomId } = req.params;
  const room = await Room.findById(roomId);
  if (!room) res.status(404);
  res.json({ room });
});

// @route DELETE /api/room/:roomId
const closeRoom = asyncHandler(async (req, res) => {
  const { roomId } = req.params;
  const room = await Room.findByIdAndDelete(roomId);
  res.json(room);
});

// @route POST /api/room/:roomId/user?name=name
const addUserToRoom = asyncHandler(async (req, res) => {
  const { name } = req.query;
  const { roomId } = req.params;
  const room = await Room.findById(roomId);
  const user = new User({ name });

  if (!room.users) {
    room.users = new Map();
  }
  room.users.set(name, user);

  await Room.findByIdAndUpdate(roomId, {
    users: room.users,
  });

  res.json({ message: `Added new user ${name}` });
});

// @route DELETE /api/room/:roomId/user?name=name
const removeUserFromRoom = asyncHandler(async (req, res) => {
  const { name } = req.query;
  const { roomId } = req.params;
  const room = await Room.findById(roomId);

  room.users.delete(name);

  await Room.findByIdAndUpdate(roomId, {
    users: room.users,
  });

  res.json({ message: `User ${name} has been removed from the room` });
});

// @route PUT /api/room/:roomId/user/estimate?estimate=estimate&name=name
const userChangeEstimate = asyncHandler(async (req, res) => {
  const { estimate, name } = req.query;
  const { roomId } = req.params;
  const room = await Room.findById(roomId);

  room.users.set(name, { name, estimate });

  await Room.findByIdAndUpdate(roomId, {
    users: room.users,
  });

  res.json({ message: `${name}'s estimate has been set to ${estimate}` });
});

module.exports = {
  createRoom,
  getRoom,
  closeRoom,
  addUserToRoom,
  removeUserFromRoom,
  userChangeEstimate,
};
