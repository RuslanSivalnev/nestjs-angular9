import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotificationsService} from '../../../core/services/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient, private notificationService: NotificationsService) {
  }


  getWeatherFromCity(city: string) {
    return this.http.get('api/coord', {params: {city}});
  }


  getWeatherFromLocation(coord) {
    return this.http.post('api/coord', {...coord});
  }
}
