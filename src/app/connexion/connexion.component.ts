import { Component, Output,EventEmitter, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User} from '../model/user';
import { MessagerieService} from '../messagerie.service';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
 // @Output() idUserReceiveMessageEvent = new EventEmitter<number>();
  idUserReceive:number=0;
  u=new User();
  msg='';

  inscrireb:boolean=false;
  

  constructor(private route:Router,
              private serv:MessagerieService,
              private local:LocalStorageService) { 
    
   
  }

  ngOnInit(): void {
  }
  
store1(){
  this.local.store('idUserReceive',this.idUserReceive);  
}
store2(){
  this.local.store('username',this.u.username)
}

  cnx(){
  console.log(this.u)
  this.serv.verifUser(this.u).subscribe(
    (data)=>{
      if(data === null){
        this.msg="verifier vos params";

      }else{
        this.store2();
        console.log(this.u.username)
        this.route.navigate(["/contenu"])
        this.serv.getIdUser(this.u).subscribe(
          (data)=>{
            console.log("id ml data fl cnx"+data);
            this.idUserReceive=data;
            console.log("id ml idUserReceive fl connexi"+this.idUserReceive);
            this.store1();
            console.log("id b3d store"+this.idUserReceive);
            
            //this.idUserReceiveMessageEvent.emit(this.idUserReceive);
          },(err)=>{
            
          }
        )
      }
    },err=>{

    }
  )
 
 
  }

  store3(){
    this.local.store('inscrire',this.inscrireb)
  }
  inscrire(){
    this.inscrireb=true;
    console.log(this.inscrireb)
    this.store3();
  }
  
}
