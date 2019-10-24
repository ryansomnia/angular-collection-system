import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountModalUpdateComponent } from './account-modal-update.component';

describe('AccountModalUpdateComponent', () => {
  let component: AccountModalUpdateComponent;
  let fixture: ComponentFixture<AccountModalUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountModalUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountModalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
