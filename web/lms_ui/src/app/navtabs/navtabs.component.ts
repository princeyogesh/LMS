import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * @title Tab group with dynamic height based on tab contents
 */
@Component({
  selector: 'navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css'],
  standalone: true,
  imports: [MatTabsModule],
})
export class NavTabseComponent {}
