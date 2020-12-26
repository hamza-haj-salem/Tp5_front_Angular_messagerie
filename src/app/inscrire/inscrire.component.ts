import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  inscrireb:boolean=false;
  constructor(private local:LocalStorageService) {
    this.retrieve();
   }

  ngOnInit(): void {
  }
  retrieve(){
    this.inscrireb = this.local.retrieve('inscrire');
    console.log("ml meth retrieve "+this.inscrireb);
  }

}
