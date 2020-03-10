import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCoordComponent } from './from-coord.component';

describe('FromCoordComponent', () => {
  let component: FromCoordComponent;
  let fixture: ComponentFixture<FromCoordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromCoordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
