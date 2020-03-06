import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'weather',
  },
  {
    path: 'weather', loadChildren: () => import('./modules/weather/weather.module').then(m => m.WeatherModule),
  },
  {
    path: 'table', loadChildren: () => import('./modules/table/table.module').then(m => m.TableModule),
  },
  {
    path: '**',
    redirectTo: 'weather',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
