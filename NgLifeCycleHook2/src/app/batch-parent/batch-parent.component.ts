import { Component, ContentChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { BatchChildComponent } from '../batch-child/batch-child.component';

@Component({
  selector: 'app-batch-parent',
  templateUrl: './batch-parent.component.html',
  styleUrls: ['./batch-parent.component.css']
})
export class BatchParentComponent {
@ContentChild(BatchChildComponent) batchchildComponent:BatchChildComponent;

}
