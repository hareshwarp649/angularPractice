import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy, OnChanges  {
   
  ngOnInit(){

   }

  ngOnChanges(){

  }
  ngOnDestroy(){
    console.log("Student Component Destroy");
    
  }
}
