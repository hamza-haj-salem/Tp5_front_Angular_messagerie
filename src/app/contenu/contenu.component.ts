import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import { MessagerieService } from '../messagerie.service';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {
  navbar:boolean=false;
  idUserReceive:number=0;
  lm:any=[]
  username:string;
  constructor(private route:Router,  private serv:MessagerieService,private local:LocalStorageService) { 
  this.retrieve();
  this.retrieve2();
   console.log("ml local fl construct b3d retrieve "+this.idUserReceive);

   this.serv.getMessageByUserReceive(this.idUserReceive).subscribe(
     (data)=>{
       this.lm=data;

     },(err)=>{

     }
   )
  }

  retrieve(){
    this.idUserReceive = this.local.retrieve('idUserReceive');
    console.log("ml meth retrieve "+this.idUserReceive);
  }
  retrieve2(){
    this.username = this.local.retrieve('username');
  }

  ngOnInit(): void {
  }

  clear(){
    this.local.clear('idUserReceive');
    this.route.navigate([""]);
  }

  Supprimer(id){
    console.log(id)
    this.serv.deleteMessageById(id).subscribe(
      (data)=>{},(err)=>{}
    )
   
  }
  // ReceiveIdUserReceive($event){
  //   this.idUserReceive = $event
  //   console.log("ml meth fl contenu ,id:"+this.idUserReceive)
  // }
  ReceiveNavbar($event){
    this.navbar = $event;
    this.navbar = true;
    console.log(this.navbar)
  }
  MsgEnv(){
    this.route.navigate(["/ListeMsgEnv"]);
  }
  MsgRec(){
    this.route.navigate(["/contenu"]);
  }
  send(){
    this.route.navigate(["/send"]);

  }

}
