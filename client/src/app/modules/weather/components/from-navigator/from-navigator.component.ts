import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-from-navigator',
  templateUrl: './from-navigator.component.html',
  styleUrls: ['./from-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromNavigatorComponent implements OnInit {
  @Output() streamLocation = new EventEmitter();
  @Output() stopStreamLocation = new EventEmitter();
  @Input() isStreamingLocation: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonHandler() {
    !this.isStreamingLocation ?
      this.streamLocation.emit()
      :
      this.stopStreamLocation.emit();
  }
}
