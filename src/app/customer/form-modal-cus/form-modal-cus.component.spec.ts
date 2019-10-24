import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalCusComponent } from './form-modal-cus.component';

describe('FormModalCusComponent', () => {
  let component: FormModalCusComponent;
  let fixture: ComponentFixture<FormModalCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModalCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModalCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
