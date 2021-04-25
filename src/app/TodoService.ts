import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class TodoService {
  public socket: Socket;

  constructor() {
    this.socket = io('ws://65.2.126.217:3000',{withCredentials: true,transports: ["websocket"]});
    this.socket.on('connect', function () {
        console.log('Connected!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    });

 

  }

 
  sendMessage(msg: any) {
     // this.socket.connect();
   //console.log(this.socket);
    this.socket.emit('message', msg);

  }


  onNewMessage() {
    return new Observable(observer => {
      this.socket.on('message', msg => {
          console.log(msg);
        observer.next(msg);
      });
    });
  }
}