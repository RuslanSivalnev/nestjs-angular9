import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {TableService} from '../../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})


export class TableComponent implements OnInit {
  formG: FormGroup;
  items: FormArray;

  constructor(
    private fb: FormBuilder,
    private tableService: TableService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(): void {
    this.formG = this.fb.group({
      items: this.fb.array([
        this.fb.array([this.createCell()])
      ])
    });
    this.items = this.formG.get('items') as FormArray;
  }

  createCell(): FormGroup {
    return this.fb.group({
      numb: [null],
    });
  }

  addRow() {
    const row = this.fb.array([this.createCell()]);
    this.items.push(row);
  }

  addCell(index: number): void {
    const row = this.items.get(`${index}`) as FormArray;
    row.push(this.createCell());
  }

  removeCell(index: number) {
    const row = this.items.get(`${index}`) as FormArray;
    row.controls.length === 1 ? this.items.removeAt(index) : row.removeAt(row.controls.length - 1);
  }

  calcSum(index: number) {
    this.tableService.showSum(this.items.get(`${index}`) as FormArray);
  }

  calcMultiply(index: number) {
    this.tableService.showMultiply(this.items.get(`${index}`) as FormArray);
  }
}
