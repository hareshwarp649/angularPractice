import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchChildComponent } from './batch-child.component';

describe('BatchChildComponent', () => {
  let component: BatchChildComponent;
  let fixture: ComponentFixture<BatchChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchChildComponent]
    });
    fixture = TestBed.createComponent(BatchChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
