import { Component, OnInit } from '@angular/core';
import { ChatService } from '../WebSocketService';
import { ItemsModel } from './todo.item.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public taxt: any;
   items : ItemsModel[] = []; 
  
  
  constructor(private socketService:ChatService) { 
    
  }

  ngOnInit(): void {

  }
 
 
  public gatTaxt() {
   // console.log(this.taxt)
    this.socketService.sendMessage(this.taxt)

   var colorText: ItemsModel = new ItemsModel();
   
   colorText.color=this.getRandomColor();
   colorText.text=this.taxt;
     if (this.taxt == '') {
    }
    else {
        this.items.push(colorText);
      this.taxt = '';
     }
  }
  public getDelete(index: any){
    this.items.splice(index,1)

//


  }
  public getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var pos = 0; pos < 6; pos++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 


}


