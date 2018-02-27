import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'app';
  count = 0;
  appName;
  constructor(){
    //this.count = this.count + 1;
    console.log("Calling From Constructor : ", this.count);
  }

  ngOnChanges(){
    this.count = this.count +2;
    console.log("Calling From ngOnchange :", this.count );
  }
  ngOnInit(){
    this.count = this.count + 1;
    console.log("Calling From ngOnInit : ", this.count);
  }

  onKey(a){
    console.log("Calling from onKey :",a);
    this.appName = a;
  }

}
