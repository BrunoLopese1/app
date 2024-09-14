// import { Server } from 'socket.io';

// const io = new Server(3000, {
//   cors: {
//     origin: 'http://localhost:3000', // URL do cliente
//   },
// });

// io.on('connection', (socket) => {
//   console.log('New client connected');

//   // Emitir eventos quando tags são criadas, atualizadas ou deletadas
//   socket.on('createTag', (tag) => {
//     io.emit('tagCreated', tag);
//   });

//   socket.on('updateTag', (tag) => {
//     io.emit('tagUpdated', tag);
//   });

//   socket.on('deleteTag', (id) => {
//     io.emit('tagDeleted', id);
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });
