import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() pData: any;
  @Input() names:any;

  constructor() {
    console.log("ChildComponent Cnstructor called");

  }
  ngOnChanges(changes: any) {
    console.log("ChildComponent ngOnChanges called");
  }
  ngOnInit() {
    console.log("ChildComponent ngOnInit called")
  }
}
