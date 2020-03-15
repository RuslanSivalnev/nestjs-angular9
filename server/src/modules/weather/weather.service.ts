import { HttpService, Injectable } from '@nestjs/common';
import { WeatherApiConf } from '../../config/config';
import { Observable } from 'rxjs';
import { ICoordinates } from './interfaces/coordinates.interface';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
  ) {
  }

  getDataFromLoc(coordinates: ICoordinates) {
    return this.httpService.get(`${WeatherApiConf.url}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${WeatherApiConf.apiKey}&units=metric`)
  }

  getDataFromCity(city: string) {
    return this.httpService.get(`${WeatherApiConf.url}?q=${city}&appid=${WeatherApiConf.apiKey}&units=metric`)
  }
}
