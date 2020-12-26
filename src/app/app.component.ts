import { Component,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MessagerieService } from './messagerie.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbar:boolean=false;
  @Output() navbarApp = new EventEmitter<boolean>();

  
  sendNavbar(){
    this.navbarApp.emit(this.navbar);
  }

  title = 'AppTest3';
  private route:Router
  private serv:MessagerieService


  
  

}

