import {NgModule} from '@angular/core';

import {WeatherRoutingModule} from './weather-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
import {WeatherComponent} from './containers/weather.component';
import {FromCityComponent} from './components/from-city/from-city.component';
import {FromCoordComponent} from './components/from-coord/from-coord.component';
import {FromNavigatorComponent} from './components/from-navigator/from-navigator.component';


@NgModule({
  declarations: [
    WeatherComponent,
    FromCityComponent,
    FromCoordComponent,
    FromNavigatorComponent
  ],
  imports: [
    SharedModule,
    WeatherRoutingModule,
    TranslateModule.forChild(),
  ],
})
export class WeatherModule {
}
