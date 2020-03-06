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

  postLocation(coordinates: ICoordinates) {
    return this.httpService.get(`${WeatherApiConf.url}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${WeatherApiConf.apiKey}`)
  }
}
