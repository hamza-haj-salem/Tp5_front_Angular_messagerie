
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { MessagerieService } from '../messagerie.service';
import { Message} from '../model/message';
import { User } from '../model/user';



@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  userReceive:any={id:null,nom:"",username:"",password:""}
  userSend:any=[];
  msgErreur:string="";
  username:string;
  msg:any={id:null,sujet:"",contenu:"",userReceive:this.userReceive,userSend:this.userSend};

  listeUserReceive:any=[]

 
  constructor(private route:Router,
              private serv:MessagerieService,
              private local:LocalStorageService) {

                this.serv.listeUser().subscribe(
                  (data)=>{
                    this.listeUserReceive=data;
                  },(err)=>{}
                )
                this.retrieve2();
                console.log("username ml construct "+this.username)
                this.serv.getUserByLogin(this.username).subscribe(
                  (data)=>{
                      this.userSend=data;
                      console.log("usersend ml cons "+this.userSend.username)
                  },(err)=>{

                  }
                )
               }

  ngOnInit(): void {
  }

  retrieve2(){
    this.username = this.local.retrieve('username');
  }

  send(){
    this.userReceive.username=this.msg.userReceive.username;
    console.log("user de msg "+ this.userReceive.username)
     this.serv.getUserByLogin(this.userReceive.username).subscribe(
      (data)=>{
        if(data === null){
          this.msgErreur="USER INVALID";
          console.log(this.msgErreur);
        }else{
          console.log("data b3d else "+data)
          this.userReceive=data;
          console.log("userReceive b3d else "+this.userReceive);
          console.log("userSend b3d else "+this.userSend);
          this.msg.userSend=this.userSend;
          this.msg.userReceive=this.userReceive;
          console.log("msg a env "+this.msg.userReceive.username);
          this.serv.sendMessage(this.msg).subscribe(
            (data)=>{
              console.log("msg ml data "+data)
              alert("YOUR MESSAGE HAS BEEN SENT TO "+this.userReceive.username+" WITH SUCCESS" )
            },(err)=>{}
          )
       }
     },(err)=>{

     }
    )

   }
}
