import { Component, OnInit } from '@angular/core';
import { HardcodedserviceService } from '../service/hardcodedservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public hard:HardcodedserviceService) { }

  ngOnInit(){
    this.hard.logout();
  }

}
