import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanModalPostComponent } from './loan-modal-post.component';

describe('LoanModalPostComponent', () => {
  let component: LoanModalPostComponent;
  let fixture: ComponentFixture<LoanModalPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanModalPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanModalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
