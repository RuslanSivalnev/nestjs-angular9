import {Injectable} from '@angular/core';
import {NotificationsService} from '../../../core/services/notifications.service';
import {FormArray} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  sumPrefix = this.translate.instant('table_page.notifications.sum');
  multiplyPrefix = this.translate.instant('table_page.notifications.multiply');

  constructor(private notificationService: NotificationsService, private translate: TranslateService) {
  }


  public showSum(row: FormArray): void {
    const result = row.getRawValue().reduce((acc, el) => acc + el.numb, 0);
    this.notificationService.info(this.sumPrefix + result);
  }

  public showMultiply(row: FormArray): void {
    const result = row.getRawValue().reduce((acc, el) => acc * (el.numb !== null ? el.numb : 1), 1);
    this.notificationService.info(this.multiplyPrefix + result);
  }

}
