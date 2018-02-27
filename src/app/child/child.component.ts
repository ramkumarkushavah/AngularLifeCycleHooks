import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { Employee } from '../parent/employee';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() childInstance: ChildComponent;

  @Input() employee: Employee;
  @Input() message: string;

  allMsgChangeLogs: string[] = [];
  allEmployeeChangeLogs: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("Parent ngOnChange : ", changes);
  //   for (let propName in changes) {
  //     let change = changes[propName];
  //     let curVal = JSON.stringify(change.currentValue);
  //     let prevVal = JSON.stringify(change.previousValue);

  //     console.log(curVal);
  //     console.log(prevVal);
  //   }
  // }
  ngOnChanges(changes: SimpleChanges) {
    console.log("Child Component ngOnChanges: ", changes);

    
    for (let propName in changes) {
      let change = changes[propName];

      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;

      if (propName === 'message') {
        this.allMsgChangeLogs.push(changeLog);
      } else if (propName === 'employee') {
        this.allEmployeeChangeLogs.push(changeLog);
      }
    }
  }


}
