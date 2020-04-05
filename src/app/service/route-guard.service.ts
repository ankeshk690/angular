import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouterLink } from '@angular/router';
import { HardcodedserviceService } from './hardcodedservice.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  constructor(private rot:HardcodedserviceService,private ram:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

  if(this.rot.isloggedin())
  {
  return true;
  }
  else
  {
   this.ram.navigate(['login'])
  return false;
  }
}}
