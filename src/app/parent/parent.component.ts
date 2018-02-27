import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { Employee } from './employee';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, AfterViewInit {

  // this input is used for the app component
  @Input() appMsg: string;

  emp = new Employee('Mahesh', 20);
  msg: string = 'Hello World!';


  constructor() {
    console.log("Calling From Parent Constructor");
  }

  ngOnInit() {
    console.log("Calling From Parent ngOnInit");
  }

  //this is called when the any changes occur in app component
  // because app component is the parent component for this component.
  ngOnChanges(changes: SimpleChanges) {
    console.log("Calling From Parent Component ngOnChanges : ", changes);

    for (let keyData in changes) {
      console.log("Key Data is : ", changes);
      let change = changes[keyData];

      let currentV = JSON.stringify(change.currentValue);
      let previousV = JSON.stringify(change.previousValue);

      console.log("Currrent Value is : ", currentV);
      console.log("Previous Value is : ", previousV);

      let log = `${keyData}: currentValue = ${currentV}, previousValue = ${previousV}`;

      console.log("log Data is : ", log);

      if (keyData === 'message') {
        //this.allMsgChangeLogs.push(changeLog);
        //any Action
      }
      else if (keyData === 'employee') {

        //this.allEmployeeChangeLogs.push(changeLog);
        // any action
      }

    }

    console.log(this.appMsg);

  }

  ngAfterViewInit() {
    console.log("Calling From Parent Component ngAfterViewInit");
  }

  onFormSubmit(empForm: NgForm) {
    console.log("Form Data : ", empForm);
    let name = empForm.controls['name'].value;
    let age = empForm.controls['age'].value;
    this.emp = new Employee(name, age);
  }



}
