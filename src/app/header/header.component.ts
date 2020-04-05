import { Component, OnInit } from '@angular/core';
import { HardcodedserviceService } from '../service/hardcodedservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
status:boolean=false;
  constructor(public hard:HardcodedserviceService) { }

  ngOnInit(){
   this.status= this.hard.isloggedin()
  }

}
