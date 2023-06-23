// import { CosoyteComponent } from './cosoyte.component';
// import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { CosoyteService } from './../../_services/cosoyte.service';
// import { Component, Inject, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-benh-vien',
//   templateUrl: './cosoyte.component.html',
//   styleUrls: ['./cosoyte.component.css'],
// })
// export class CosoyteComponent implements OnInit {
//   cosoyte: any;

//   constructor(private CosoyteService: CosoyteService) {}

//   ngOnInit(): void {
//     this.loadCosoyte();
//   }
//   loadCosoyte() {
//     this.CosoyteService.getCosoyteList().subscribe((data: any) => {
//       this.cosoyte = data;
//       console.log(this.cosoyte);
//     });
//   }
// }
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
  // benhVienList: any[] | undefined;

  // constructor(
  //   private dialog: MatDialog,
  //   private cosoyteService: CosoyteService
  // ) {}

  // ngOnInit() {
  //   this.loadBenhVienList();
  // }

  // loadBenhVienList() {
  //   this.cosoyteService.getCosoyteList().subscribe((data) => {
  //     this.benhVienList = data;
  //   });
  // }

  // openDialog(id: number) {
  //   this.cosoyteService.getCosoyteById(id).subscribe((data) => {
  //     const dialogRef = this.dialog.open(BenhVienDialogComponent, {
  //       width: '400px',
  //       data: data,
  //     });
  //   });
  // }
  constructor(
    public dialog: MatDialog,
  
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(BenhVienDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
