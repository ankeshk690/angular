import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedserviceService {
  constructor() { }

  authenticate( username :any, password:any)
  {
    // console.log('before'+ this.isloggedin())
    if(username==="ankesh" && password==="good")
    {
      
      sessionStorage.setItem('authenticated',username)  
      // console.log('after'+ this.isloggedin())
return true;
    }

return false;

  }

  isloggedin()
  {
   let user= sessionStorage.getItem('authenticated')
   return !(user===null)
  }

  logout()
  {
    let user=sessionStorage.removeItem('authenticated')
  }


  
}
