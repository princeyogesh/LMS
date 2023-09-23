import { Component, EventEmitter ,Output  } from '@angular/core';
import { HideOnloginService } from '../hide-onlogin.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  constructor(private _hideonlogin: HideOnloginService, private router:Router){}
  userEnailId = "userEmailId";
  userPasswordId = "userPasswordId";
  userEmail:any;
  userPassword:any
  loginuser(){
   // alert("validating user");
    this.userEmail    = (document.getElementById(this.userEnailId) as HTMLInputElement).value;
    this.userPassword = (document.getElementById(this.userPasswordId) as HTMLInputElement).value;
    console.log("userEmail is "+ this.userEmail);
    if(validation(this.userEmail, this.userPassword) == true)   //check if validation is successful
    {
      //loadthehomepageforuser = true;
      this.showProfileforeventNameeventNameUser(this.userEmail);
    }
    else{
      alert("please retry login");
    }
   
  }

  hideloginPage(){
    console.log("hiding login page");
  }
 
  hideLoginbutton(){
    this._hideonlogin.isuserLoggedin = true;
    console.log("hiding loging button");
    
   
  }

    showProfileforeventNameeventNameUser(userEmail: any) {
      this.hideLoginbutton();
      this.hideloginPage();
      this.router.navigate(["profile"],  { queryParams: { role: "admin" } })   //we need to add profile id here to seprately load profiles
  }
}
function validation(userEmail: any, userPassword: any) {

  //Need to complete validation method with DB currently using static with yogesh user
  if(userEmail == "yogesh")
    return true;

  return false;
}



