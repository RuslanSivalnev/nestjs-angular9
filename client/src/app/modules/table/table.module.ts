import {NgModule} from '@angular/core';

import {TableRoutingModule} from './table-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
import {TableComponent} from './containers/table/table.component';
import { TableRowComponent } from './components/table-row/table-row.component';


@NgModule({
  declarations: [
    TableComponent,
    TableRowComponent
  ],
  imports: [
    SharedModule,
    TableRoutingModule,
    TranslateModule.forChild()
  ]
})
export class TableModule {
}
