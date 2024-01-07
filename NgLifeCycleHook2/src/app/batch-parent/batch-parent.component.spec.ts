import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchParentComponent } from './batch-parent.component';

describe('BatchParentComponent', () => {
  let component: BatchParentComponent;
  let fixture: ComponentFixture<BatchParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchParentComponent]
    });
    fixture = TestBed.createComponent(BatchParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
