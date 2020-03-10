import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-from-navigator',
  templateUrl: './from-navigator.component.html',
  styleUrls: ['./from-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FromNavigatorComponent implements OnInit {
  @Output() streamLocation = new EventEmitter();
  @Output() stopStreamLocation = new EventEmitter();
  toggle = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonHandler() {
    if (!this.toggle) {
      this.streamLocation.emit();
    } else {
      this.stopStreamLocation.emit();
    }
    this.toggle = !this.toggle;
  }
}
