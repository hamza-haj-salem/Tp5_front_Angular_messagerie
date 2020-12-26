import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { MessagerieService } from '../messagerie.service';

@Component({
  selector: 'app-liste-msg-envoyee',
  templateUrl: './liste-msg-envoyee.component.html',
  styleUrls: ['./liste-msg-envoyee.component.css']
})
export class ListeMsgEnvoyeeComponent implements OnInit {

  idUserReceive:number=0;
  lms:any=[]
  constructor(private route:Router,private serv:MessagerieService,private local:LocalStorageService) { 
    this.retrieve();
   console.log("ml local fl construct b3d retrieve "+this.idUserReceive);
  
   this.serv.getMessageByUserSend(this.idUserReceive).subscribe(
    (data)=>{
      this.lms=data;

    },(err)=>{

    }
  )

  }
  retrieve(){
    this.idUserReceive = this.local.retrieve('idUserReceive');
    console.log("ml meth retrieve "+this.idUserReceive);
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
    alert("your msg has been deleted")
    this.serv.getMessageByUserSend(this.idUserReceive).subscribe(
      (data)=>{
        this.lms=data;
  
      },(err)=>{
  
      }
    )
   
  }


  ngOnInit(): void {
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
