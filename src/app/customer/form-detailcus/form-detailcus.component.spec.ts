import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailcusComponent } from './form-detailcus.component';

describe('FormDetailcusComponent', () => {
  let component: FormDetailcusComponent;
  let fixture: ComponentFixture<FormDetailcusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDetailcusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailcusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
