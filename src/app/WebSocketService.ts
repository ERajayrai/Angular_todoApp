import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

//@Injectable()
export class ChatService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://127.0.0.1:3000');
    this.socket.on('connect', function () {
        console.log('Connected!');
    });
    
  }

  // EMITTER
  sendMessage(msg: string) {
     // this.socket.connect();
   console.log(this.socket);
    this.socket.emit('message', { message: msg });

  }

  // HANDLER
  onNewMessage() {
    return new Observable(observer => {
      this.socket.on('message', msg => {
          console.log(msg);
        observer.next(msg);
      });
    });
  }
}