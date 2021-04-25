import { Component, OnInit } from '@angular/core';
import { TodoService} from '../TodoService';
import { ItemsModel } from './todo.item.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public taxt: any;
  public id:any;
   items : ItemsModel[] = []; 
  
  
  constructor(private socketService:TodoService) { 
    this.id=this.getRandomColor();
    
  }

  ngOnInit(): void {


    this.socketService.onNewMessage().subscribe((message :any) =>{

      if(message.id!=this.id){
        this.items.push(message);

      }    
      console.log(message);

   });

   

   /*this.socketService.socket.on('message',(data)=>{
     console.log(data);
   });*/


  }

  
  public gatTaxt() {
    

  
     if (this.taxt == '') {
    }
    else {
      var colorText: ItemsModel = new ItemsModel();
      colorText.id=this.id;
      colorText.color=this.getRandomColor();
      colorText.text=this.taxt;
   
      this.socketService.sendMessage(colorText)
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



