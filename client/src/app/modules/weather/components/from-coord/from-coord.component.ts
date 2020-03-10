import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-from-coord',
  templateUrl: './from-coord.component.html',
  styleUrls: ['./from-coord.component.scss']
})
export class FromCoordComponent implements OnInit {

  @Input() locationForm: FormGroup;
  @Output() searchLocation = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
