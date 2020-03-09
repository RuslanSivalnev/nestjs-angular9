import { NgModule } from '@angular/core';

import { WeatherRoutingModule } from './weather-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import {WeatherComponent} from './containers/weather.component';


@NgModule({
  declarations: [WeatherComponent],
  imports: [
    SharedModule,
    WeatherRoutingModule,
    TranslateModule.forChild(),
  ],
})
export class WeatherModule {
}
