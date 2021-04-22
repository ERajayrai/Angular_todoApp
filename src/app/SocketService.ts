import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { map } from 'rxjs/operators';

@Injectable()
export class SocketService{

    constructor(private socket:Socket){}

    sendMaessage(msg:String){
        
        this.socket.emit('message', msg);
        console.log(msg);
    }    
    getMessage() {
        return this.socket.fromEvent('message').pipe(map((data:any) => data.msg));
      }



}