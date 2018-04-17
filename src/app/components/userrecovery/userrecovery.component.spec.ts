import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrecoveryComponent } from './userrecovery.component';

describe('UserrecoveryComponent', () => {
  let component: UserrecoveryComponent;
  let fixture: ComponentFixture<UserrecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
