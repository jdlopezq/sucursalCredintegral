import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordrecoveryComponent } from './passwordrecovery.component';

describe('PasswordrecoveryComponent', () => {
  let component: PasswordrecoveryComponent;
  let fixture: ComponentFixture<PasswordrecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordrecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordrecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
