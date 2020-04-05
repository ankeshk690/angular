import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedserviceService } from '../service/hardcodedservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
UserName= "ankesh"
Password= ""
invalid= "not allowed"
val=false

  constructor(private router: Router,private hardcoded:HardcodedserviceService) { }

  ngOnInit(): void {
  }
fun()
{
console.log(this.UserName)
if(this.hardcoded.authenticate(this.UserName, this.Password)){
  this.router.navigate(['welcome',this.UserName])
this.val=false
}
else
{
this.val=true
}
}
}
