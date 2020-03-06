import { NgModule } from '@angular/core';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [TableComponent],
  imports: [
    SharedModule,
    TableRoutingModule,
    TranslateModule.forChild()
  ]
})
export class TableModule { }
