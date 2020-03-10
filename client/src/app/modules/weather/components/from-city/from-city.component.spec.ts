import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCityComponent } from './from-city.component';

describe('FromCityComponent', () => {
  let component: FromCityComponent;
  let fixture: ComponentFixture<FromCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
