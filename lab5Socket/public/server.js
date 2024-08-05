const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let onlineUsers = {};

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('setNickname', (nickname) => {
        onlineUsers[socket.id] = nickname;
        io.emit('userConnected', nickname);
        io.emit('onlineUsers', Object.values(onlineUsers));
    });

    socket.on('sendMessage', (message) => {
        const nickname = onlineUsers[socket.id];
        socket.broadcast.emit('receiveMessage', { message, nickname });
    });

    socket.on('typing', (isTyping) => {
        const nickname = onlineUsers[socket.id];
        socket.broadcast.emit('typing', { nickname, isTyping });
    });

    socket.on('disconnect', () => {
        const nickname = onlineUsers[socket.id];
        delete onlineUsers[socket.id];
        io.emit('userDisconnected', nickname);
        io.emit('onlineUsers', Object.values(onlineUsers));
    });
    });

    server.listen(3000, () => {
    console.log('Server is running on port 3000');
    });