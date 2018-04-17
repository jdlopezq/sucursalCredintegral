import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpassrecoverComponent } from './userpassrecover.component';

describe('UserpassrecoverComponent', () => {
  let component: UserpassrecoverComponent;
  let fixture: ComponentFixture<UserpassrecoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpassrecoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpassrecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
