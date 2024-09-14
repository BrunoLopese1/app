import { io, Socket } from 'socket.io-client';

// Configure o cliente `socket.io`
const socket: Socket = io('http://localhost:3000', {
  transports: ['websocket'], // Pode configurar outros transportes se necessário
});

export default socket;
