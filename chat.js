const express = require('express');
const app = express();

// import Socket.io from 'socket.io';
const socketio = require('socket.io')
app.use(express.static(__dirname+'/public'))
 const expressapp=app.listen(3000);
 socketio(expressapp);
  const io=socketio(expressapp);
  io.on('connection',(socket)=>{
    console.log('a user connected');
 
    
      io.emit('messageFormServer',"hello im server are you okay!");
      socket.on('messageFormClient',(data)=>{
        console.log(data);
      });
  
  });