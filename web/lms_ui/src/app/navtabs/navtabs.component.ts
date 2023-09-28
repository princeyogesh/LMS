import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CoursetableComponent } from './coursetable/coursetable.component';
/**
 * @title Tab group with dynamic height based on tab contents
 */
@Component({
    selector: 'navtabs',
    templateUrl: './navtabs.component.html',
    styleUrls: ['./navtabs.component.css'],
    standalone: true,
    imports: [MatTabsModule, CoursetableComponent]
})
export class NavTabseComponent {}
