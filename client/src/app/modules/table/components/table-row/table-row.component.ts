import {Component, Input, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
})
export class TableRowComponent implements OnInit {
  @Input() row: FormArray;

  constructor() {
  }

  ngOnInit(): void {
  }
}
