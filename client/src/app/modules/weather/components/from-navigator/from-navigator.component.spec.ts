import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromNavigatorComponent } from './from-navigator.component';

describe('FromNavigatorComponent', () => {
  let component: FromNavigatorComponent;
  let fixture: ComponentFixture<FromNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
