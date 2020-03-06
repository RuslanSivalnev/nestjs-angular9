import { NgModule } from '@angular/core';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';


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
