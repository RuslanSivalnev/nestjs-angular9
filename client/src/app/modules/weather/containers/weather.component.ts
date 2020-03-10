import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { NotificationsService } from '../../../core/services/notifications.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  streamLocation$;
  weatherResponse;
  cityForm: FormGroup;
  locationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService,
    private notificationService: NotificationsService,
  ) {
  }

  ngOnInit(): void {
    this.initForms();
  }

  ngOnDestroy(): void {
    this.streamLocation$.unsubscribe();
  }

  initForms() {
    this.cityForm = this.fb.group({
      city: [null],
    });

    this.locationForm = this.fb.group({
      lat: [null],
      lon: [null],
    });

  }

  searchOfCity(value) {
    this.weatherService.getWeatherFromCity(value)
      .subscribe(
        res => this.weatherResponse = res,
        err => this.notificationService.error(err),
      );
  }

  searchLocation(coord: any) {
    this.weatherService.getWeatherFromLocation(coord)
      .subscribe(
        res => this.weatherResponse = res,
        err => this.notificationService.error(err),
      );
  }

  streamLocation() {
    this.streamLocation$ = this.weatherService.startWatchGeolocation()
      .subscribe(
        res => this.weatherResponse = res,
        err => this.notificationService.error(err),
      );
  }

  stopStreamLocation() {
    this.streamLocation$.unsubscribe();
  }
}
