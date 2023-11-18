const Chat = require('../models/chat-model');
const User = require('../models/user-model');

const getChats = async () => {
  return await Chat.find().populate('user');
};

const createChat = async (message, userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }

  const newChat = new Chat({ message, user: userId });
  await newChat.save();
  return newChat;
};

module.exports = { getChats, createChat };