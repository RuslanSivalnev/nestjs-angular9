import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-presentation',
  templateUrl: './weather-presentation.component.html',
  styleUrls: ['./weather-presentation.component.scss'],
})
export class WeatherPresentationComponent implements OnInit {
  @Input() weatherResponse;

  constructor() {
  }

  ngOnInit(): void {
  }

}
