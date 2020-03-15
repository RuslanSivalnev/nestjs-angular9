import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }


  public getWeatherFromCity(city: string) {
    return this.http.get(`${environment.apiUrl}/coord`, { params: { city } })
      .pipe(switchMap((res: Array<any>) => res.length ? res : throwError('City not found')));
  }


  public getWeatherFromLocation(coord) {
    return this.http.post(`${environment.apiUrl}/coord`, { ...coord })
      .pipe(switchMap((res: Array<any>) => res.length ? res : throwError('Invalid value entered')));
  }

  public startWatchGeolocation(): Observable<any> {
    return new Observable(observer => {
      let watchId;
      const onSuccess: PositionCallback = (pos: Position) => observer.next(pos);
      const onError: PositionErrorCallback | any = err => observer.error(err);

      if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(onSuccess, onError, {
          enableHighAccuracy: false,
          timeout: 1500,
          maximumAge: 0,
        });
      } else {
        onError('Geolocation not available');
      }
      return {
        unsubscribe(): void {
          navigator.geolocation.clearWatch(watchId);
        },
      };
    }).pipe(
      debounceTime(100),
      switchMap((res: Position) => this.getWeatherFromLocation({ lat: res.coords.latitude, lon: res.coords.longitude })),
    );
  }
}
