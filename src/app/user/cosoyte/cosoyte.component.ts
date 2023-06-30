import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CosoyteService } from './../../_services/cosoyte.service';
import { BenhVienDialogComponent } from '../benhvien-dialog/benhvien-dialog.component';

@Component({
  selector: 'app-cosoyte',
  templateUrl: './cosoyte.component.html',
  styleUrls: ['./cosoyte.component.css'],
})
export class CosoyteComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(BenhVienDialogComponent);
  }
}
