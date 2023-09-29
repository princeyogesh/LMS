import {Component, OnInit, ɵpublishDefaultGlobalUtils} from '@angular/core';
import { CommonModule } from '@angular/common';

import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { AddNewCourseExpFormComponent } from "./add-new-course-exp-form/add-new-course-exp-form.component";
import { MatDialog } from '@angular/material/dialog';

export interface CourseElement {
  position: number;
  course_name: string;
  start_date: Date;
  academic_year: number;
  batchstrength: number;
}
//ELENEBT_DATA is static data we need to change this
//and pull data from db for each user ID
const ELEMENT_DATA: CourseElement[] = [
  {position: 1, course_name: 'Hydrogen', start_date:new Date(2017, 4, 4), academic_year: 2021, batchstrength:50},
  {position: 2, course_name: 'Helium',start_date:new Date(2017, 4, 4, 17, 23, 42, 11), academic_year: 2021, batchstrength:50},
  {position: 3, course_name: 'Lithium', start_date:new Date(2017, 4, 4, 17, 23, 42, 11), academic_year: 2021, batchstrength:50},
  {position: 4, course_name: 'Beryllium', start_date:new Date(2017, 4, 4, 17, 23, 42, 11), academic_year: 2021, batchstrength:50},
  {position: 5, course_name: 'Boron', start_date:new Date(2017, 4, 4, 17, 23, 42, 11), academic_year: 2021, batchstrength:50},
  {position: 6, course_name: 'Carbon', start_date:new Date(2017, 4, 4, 17, 23, 42, 11),academic_year: 2021, batchstrength:50},
  {position: 7, course_name: 'Nitrogen', start_date:new Date(2017, 4, 4, 17, 23, 42, 11), academic_year: 2021, batchstrength:50},
  {position: 8, course_name: 'Oxygen', start_date:new Date(2017, 4, 4, 17, 23, 42, 11),academic_year: 2021, batchstrength:50},
  {position: 9, course_name: 'Fluorine', start_date:new Date(2017, 4, 4, 17, 23, 42, 11),academic_year: 2021, batchstrength:50},
  {position: 10,course_name: 'Neon', start_date:new Date(2017, 4, 4, 17, 23, 42, 11),academic_year: 2021, batchstrength:50},
];

/**
 * @title Adding and removing data when using an observable-based datasource.
 */
@Component({
    selector: 'app-coursetable',
    templateUrl: './coursetable.component.html',
    styleUrls: ['./coursetable.component.css'],
    standalone: true,
    imports: [MatButtonModule, MatTableModule, 
              AddNewCourseExpFormComponent, CommonModule,]
})



export class CoursetableComponent implements OnInit{
  userID: string | null = "NULL"; //key to display courses of respective user
  dataSource: any; dataToDisplay: any; displayedColumns!: string[];
  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }
  ngOnInit() {

    this.userID = this.route.snapshot.queryParamMap.get('userID');
    this.displayedColumns = ['position', 'course_name', 'start_date', 'academic_year', 'batchstrength'];
    this.dataToDisplay = this.getDataforUser(this.userID);  //34 is just static number given 
                                                       //need to fetch this ID from url queryparam
  
    this.dataSource = new ExampleDataSource(this.dataToDisplay);
    
  }


  //fetch courses data from DB for user with UserID
  getDataforUser(userID: string | any){
      console.log("getting data for User with userID --> " + userID)
      //you actually need to go DB and fetch the data up for perticular instructor
      //as of now just returning static data
      return [...ELEMENT_DATA]
  }

  //Add User to the course in DB
  addData() {
    //open the dialog let user enter the data for course which need to added
    const dialogRef = this.dialog.open(AddNewCourseExpFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    // then add that data to list ----yet to be done

    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }


  //User unsubscribes and left the perticular course remove that course from DB
  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}



class ExampleDataSource extends DataSource<CourseElement> {
  private _dataStream = new ReplaySubject<CourseElement[]>();

  constructor(initialData: CourseElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<CourseElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: CourseElement[]) {
    this._dataStream.next(data);
  }
}
