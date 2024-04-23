const http = require('http');
// importing module from  socket.io
const socketio = require('socket.io');

// creating a server
const server = http.createServer((req, res) => {
    
    res.end("hello MotherFucker");
});

const io = socketio(server, {
    cors: {
      origin: "*", // Allow requests from any origin
      methods: ["GET", "POST"] // Allow only GET and POST requests
    }
  });
 io.on('connection', (socket) => {
    console.log('new connection');
    socket.emit('welcome','connection started sucesffuly  ');
    // socket.on('disconnect', () => {
    //     console.log('user disconnected');
    // });
    socket.on('message', (msg) => {
        console.log('message:'+ msg);
        // io.emit('chat message', msg);
    });
});

server.listen(3000);
