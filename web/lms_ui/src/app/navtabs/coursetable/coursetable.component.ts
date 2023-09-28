import {Component, OnInit, ɵpublishDefaultGlobalUtils} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  position: number;
  course_name: string;
  start_date: Date;
  academic_year: number;
  batchstrength: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, course_name: 'Hydrogen', start_date:new Date(2017, 4, 4, 17, 23, 42, 11), academic_year: 2021, batchstrength:50},
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
  imports: [MatButtonModule, MatTableModule],
})



export class CoursetableComponent implements OnInit{
  userID: number = 0; //key to display courses of respective user
  
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.userID = params['userID']; 
      }
    );
  }


  displayedColumns: string[] = ['position', 'course_name', 'start_date', 'academic_year', 'batchstrength'];
  dataToDisplay = this.getDataforUser(this.userID);  //34 is just static number given 
                                                     //need to fetch this ID from url queryparam

  dataSource = new ExampleDataSource(this.dataToDisplay);
  getDataforUser(userID: number){
      console.log("getting data for User with userID" + userID)
      //you actually need to go DB and fetch the data up for perticular instructor
      //as of now just returning static data
      return [...ELEMENT_DATA]
  }
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}
