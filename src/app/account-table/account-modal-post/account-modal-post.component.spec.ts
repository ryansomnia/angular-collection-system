import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountModalPostComponent } from './account-modal-post.component';

describe('AccountModalPostComponent', () => {
  let component: AccountModalPostComponent;
  let fixture: ComponentFixture<AccountModalPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountModalPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountModalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
