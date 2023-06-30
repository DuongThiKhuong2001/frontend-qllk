import { CosoyteService } from './../../_services/cosoyte.service';
import { HoSoService } from './../../_services/hoso.service';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasiService } from 'src/app/_services/bacsi.service';
import { ChuyenkhoaService } from 'src/app/_services/chuyenkhoa.service';
import { GiotrucService } from 'src/app/_services/giotruc.service';
import { LichKhamService } from 'src/app/_services/lichkham.service';
import { LichTrucService } from 'src/app/_services/lichtruc.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-lichkham',
  templateUrl: './lichkham.component.html',
  styleUrls: ['./lichkham.component.css'],
})
export class LichkhamComponent implements OnInit {
  lichkhamData: any[] = [];
  lichKhamItem: any;
  displayedColumns: string[] = ['chuyenKhoa', 'bacSi', 'ngayKham', 'gioKham'];
  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {
    const bacsi = this.storageService.getFromSession('bacsi');
    const hoso = this.storageService.getFromSession('hoso');
    const benhvien = this.storageService.getFromSession('benhvien');
    const chuyenkhoa = this.storageService.getFromSession('chuyenkhoa');
    const lichtruc = this.storageService.getFromSession('lichtruc');
    const giotruc = this.storageService.getFromSession('giotruc');
    const lichKhamItem = {
      tenBacSi: bacsi?.tenBacSi,
      tenChuyenKhoa: chuyenkhoa?.tenChuyenKhoa,
      ngayTruc: lichtruc?.ngayTruc,
      gioTruc: giotruc?.gioTruc,
    };

    // Thêm vào mảng lichkhamData

      this.lichkhamData = this.storageService.getLichkhamData() || []
      this.lichkhamData.push(lichKhamItem);
      this.storageService.saveLichkhamData(this.lichkhamData);

  }
  addChuyenKhoa() {
    // Xóa các session liên quan
    const sessionKeys = ['bacsi', 'chuyenkhoa', 'lichtruc', 'giotruc'];
    this.storageService.removeSessions(sessionKeys);
    const benhvien = this.storageService.getFromSession('benhvien');
    // Chuyển hướng đến trang chọn chuyên khoa
    this.router.navigate(['/nguoidung/chuyenkhoa', benhvien.id]);
  }
}
