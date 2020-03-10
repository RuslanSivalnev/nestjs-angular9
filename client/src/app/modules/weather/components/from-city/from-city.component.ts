import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-from-city',
  templateUrl: './from-city.component.html',
  styleUrls: ['./from-city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FromCityComponent implements OnInit {

  @Input() cityFg: FormGroup;

  @Output() searchOfCity = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
