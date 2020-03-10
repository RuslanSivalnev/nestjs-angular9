import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input, OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-from-city',
  templateUrl: './from-city.component.html',
  styleUrls: ['./from-city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromCityComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription: Subscription;
  @Input() cityFg: FormGroup;
  @ViewChild('searchInput') searchInput: ElementRef;

  @Output() searchOfCity = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const terms$ = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(event => event.key === 'Enter'),
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged(),
      );
    this.subscription = terms$
      .subscribe(
        criterion => {
          console.log('vds', criterion);
          this.searchOfCity.emit(criterion);
        },
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
