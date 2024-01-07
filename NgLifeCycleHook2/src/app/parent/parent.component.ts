import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() {
    console.log("ParentComponent constructor called");
  }

  ngOnchange() {
    console.log("ParentComponent ngOnchange called");
  }

  ngOnInit() {
    console.log("ParentComponent ngOnInit called");
  }
  ngDoCheck() {
    console.log("ParentComponent ngDoCheck called");

  }
  nameList:any[]=["Rahul" ,"Deva"]
  addName(name:string) {
    this.nameList.push(name);
      this.nameList = ["Pawan","Samir"];
       
  }
}
