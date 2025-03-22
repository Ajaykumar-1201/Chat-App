import { userSocketIDs } from "../app.js";

export const getOtherMember = (members, userId) =>
  members.find((member) => member._id.toString() !== userId.toString());

export const getSockets = (users = []) => {
  const sockets = users.map((user) => userSocketIDs.get(user.toString()));
  return sockets;
};

export const getBase64 = (file) => {
  if (file && file.buffer && Buffer.isBuffer(file.buffer)) {
    const base64String = file.buffer.toString("base64");
    console.log("Base64 String:", base64String);  // Check the base64 result
    return `data:${file.mimetype};base64,${base64String}`;
  } else {
    console.error("Invalid buffer:", file.buffer);
    return null;
  }
};

