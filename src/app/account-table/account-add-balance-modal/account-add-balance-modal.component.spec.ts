import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAddBalanceModalComponent } from './account-add-balance-modal.component';

describe('AccountAddBalanceModalComponent', () => {
  let component: AccountAddBalanceModalComponent;
  let fixture: ComponentFixture<AccountAddBalanceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAddBalanceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAddBalanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
