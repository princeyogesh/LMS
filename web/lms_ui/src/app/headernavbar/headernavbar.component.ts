import { Component } from '@angular/core';
import { HideOnloginService } from '../hide-onlogin.service';
@Component({
  selector: 'app-headernavbar',
  templateUrl: './headernavbar.component.html',
  styleUrls: ['./headernavbar.component.css']
})
export class HeadernavbarComponent {
  x = this._hideonlogin;
  constructor(public _hideonlogin: HideOnloginService){ }
  
}
