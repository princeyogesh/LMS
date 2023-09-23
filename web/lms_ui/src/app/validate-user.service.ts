//This service is used to validate if user login is succeed or not
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserService {
  public validationSuccess : boolean;
  constructor() { 
    this.validationSuccess = false
  }
}
