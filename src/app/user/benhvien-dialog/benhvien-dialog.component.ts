import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CosoyteService } from 'src/app/_services/cosoyte.service';

@Component({
  selector: 'app-benh-vien-dialog',
  templateUrl: './benhvien-dialog.component.html',
  styleUrls: ['./benhvien-dialog.component.css'],
})
export class BenhVienDialogComponent {
  tenChuyenKhoa: string | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cosoyteService: CosoyteService,
    private router: Router,
    private dialogRef: MatDialogRef<BenhVienDialogComponent>
  ) {}
  ngOnInit() {
    this.loadBenhVienList();
  }
  benhVienList: any[] | undefined;
  loadBenhVienList() {
    this.cosoyteService.getCosoyteList().subscribe((data) => {
      this.benhVienList = data;
    });
  }
  chonBenhVien(id: any) {
    sessionStorage.setItem('benhvienId', id);
    this.router.navigate(['/nguoidung/chuyenkhoa', id]);
    this.dialogRef.close();
  }
}
