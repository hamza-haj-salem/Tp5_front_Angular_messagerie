import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  constructor(private http:HttpClient) { }

  verifUser(u:any):Observable<any>{
    return this.http.post('http://localhost:8080/verifUser',u); 

  }
  getAllUser(){
    return this.http.get('http://localhost:8080/listeUser');
  }
  getMessageByUserReceive(id:number){
    return this.http.get('http://localhost:8080/listMessageByUserReceive/'+id);
  }
  getIdUser(u:any):Observable<any>{
    return this.http.post('http://localhost:8080/idUser',u); 
  }
  getMessageByUserSend(id:number){
    return this.http.get('http://localhost:8080/listMessageByUserSend/'+id);
  }
  deleteMessageById(id:number){
    return this.http.delete('http://localhost:8080/deleteMsg/'+id);
  }
  getUserByLogin(u:string){
    return this.http.get('http://localhost:8080/userByLogin/'+u); 
  }
  sendMessage(m:any){
    return this.http.post('http://localhost:8080/sendMessage',m); 
  }
  addUser(u:any){
    return this.http.post('http://localhost:8080/addUser',u); 
  }
  listeUser(){
    return this.http.get('http://localhost:8080/listeUser'); 
  }
}
