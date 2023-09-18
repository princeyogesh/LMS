import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-headernavbar></app-headernavbar>
  
  <div>{{title}}
      <h1>hello</h1>
  </div>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lms_ui';
}
