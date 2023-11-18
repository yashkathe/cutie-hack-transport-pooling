// chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat-controller');

router.get('/chats', chatController.getChats);
router.post('/chats', chatController.createChat);

module.exports = router;
