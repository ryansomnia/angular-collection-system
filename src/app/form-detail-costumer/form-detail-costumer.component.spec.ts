import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailCostumerComponent } from './form-detail-costumer.component';

describe('FormDetailCostumerComponent', () => {
  let component: FormDetailCostumerComponent;
  let fixture: ComponentFixture<FormDetailCostumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDetailCostumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
