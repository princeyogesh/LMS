import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router) {}
    private role :any 
    private page:any;
  ngOnInit() {
        
        this.role = this.route.snapshot.queryParamMap.get('role');
        alert("your role is , "+this.role);
    }

}
