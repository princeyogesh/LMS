import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideOnloginService {

  constructor() {
    this.isuserLoggedin = false;
   }
  public isuserLoggedin: boolean;
}
