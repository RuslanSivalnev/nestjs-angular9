import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  stream$ = false;
  cityForm: FormGroup;
  locationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.cityForm = this.fb.group({
      city: [null]
    });

    this.locationForm = this.fb.group({
      lat: [null],
      lon: [null]
    });

  }

  searchOfCity(value) {
    this.weatherService.getWeatherFromCity(value.city).subscribe(res => console.log('res', res));
  }

  searchLocation(coord: any) {
    this.weatherService.getWeatherFromLocation(coord).subscribe(res => console.log('res', res));
  }

  streamLocation() {

  }

  stopStreamLocation() {

  }
}
