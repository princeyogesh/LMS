import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-add-new-course-exp-form',
  templateUrl: './add-new-course-exp-form.component.html',
  styleUrls: ['./add-new-course-exp-form.component.css'],
  standalone: true,
  imports: [
    MatButtonModule, MatDialogModule,
  ],
})


export class AddNewCourseExpFormComponent {
  
}


