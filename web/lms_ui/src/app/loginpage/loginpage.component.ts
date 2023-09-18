import { Component, EventEmitter ,Output  } from '@angular/core';
import { HideOnloginService } from '../hide-onlogin.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  constructor(private _hideonlogin: HideOnloginService){}

  loginuser(){
    alert("validating user");
    this.hideLoginbutton();
    this.hideloginPage();
   
  }

  hideloginPage(){
    console.log("hiding login page");
  }
 
  hideLoginbutton(){
    this._hideonlogin.isuserLoggedin = true;
    console.log("hiding loging button");
   
  }

  
}
