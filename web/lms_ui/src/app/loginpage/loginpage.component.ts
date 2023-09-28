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
    let [validated, userrole] = validation(this.userEmail, this.userPassword)
    if(validated == true)   //check if validation is successful
    {
      //loadthehomepageforuser = true;
      this.showProfileforeventNameeventNameUser(this.userEmail, userrole);
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

    showProfileforeventNameeventNameUser(userEmail: any, userrole: boolean | string) {
      this.hideLoginbutton();
      this.hideloginPage();
      this.router.navigate([userrole],  { queryParams: { role: userrole, userID: 34 } })   //we need to add profile id here to seprately load profiles
  }
}

//this returns if validation is successfull or not and if successfull what is role
function validation(userEmail: any, userPassword: any) {

  //Need to complete validation method with DB currently using static with yogesh user
  if(userEmail == "yogesh")
    return [true, "admin"];
  else if(userEmail == "omkesh")
    return [true, "instructor"];
  else if(userEmail == "nikam")
    return [true, "learner"];

  return [false, "invalid"];
}



