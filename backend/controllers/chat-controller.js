// chatController.js
const chatService = require('../services/chatService');

const getChats = async (req, res) => {
  try {
    const chats = await chatService.getChats();
    res.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const createChat = async (req, res) => {
  const { message, userId } = req.body;

  try {
    const newChat = await chatService.createChat(message, userId);
    res.json(newChat);
  } catch (error) {
    console.error('Error creating chat:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getChats, createChat };
