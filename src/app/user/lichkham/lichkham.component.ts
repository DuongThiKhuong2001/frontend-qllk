import { Component, OnInit } from '@angular/core';
import { LichKhamService } from 'src/app/_services/lichkham.service';
import { StorageService } from 'src/app/_services/storage.service';
import { isEqual } from 'lodash';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lichkham',
  templateUrl: './lichkham.component.html',
  styleUrls: ['./lichkham.component.css'],
})
export class LichkhamComponent implements OnInit {
  lichkhamData: any[] = [];
  lichKhamItem: any;
  tongGiaKham: number = 0;

  displayedColumns: string[] = [
    'chuyenKhoa',
    'bacSi',
    'ngayKham',
    'gioKham',
    'giaKham',
    'actions',
  ];
  constructor(
    private storageService: StorageService,
    private router: Router,
    private lichKhamService: LichKhamService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const hoso = this.storageService.getFromSession('hoso');
    const giotruc = this.storageService.getFromSession('giotruc');
    const lichKhamItem = {
      tenBacSi: giotruc?.lichTruc.bacSi.tenBacSi,
      tenChuyenKhoa: giotruc?.lichTruc.bacSi.chuyenKhoa.tenChuyenKhoa,
      chuyenKhoaId: giotruc?.lichTruc.bacSi.chuyenKhoa.id,
      ngayTruc: giotruc.lichTruc.ngayTruc,
      gioTruc: giotruc?.gioTruc,
      gioTrucId: giotruc?.id,
      tienKham: giotruc?.lichTruc.bacSi.giaKham,
      hoSoId: hoso.id,
    };

    // Thêm vào mảng lichkhamData
    this.loadLichkhamData();
    const isDuplicate = this.lichkhamData.some((item) =>
      isEqual(item, lichKhamItem)
    );
    if (
      !isDuplicate &&
      lichKhamItem.tenBacSi &&
      lichKhamItem.tenChuyenKhoa &&
      lichKhamItem.chuyenKhoaId &&
      lichKhamItem.ngayTruc &&
      lichKhamItem.gioTruc &&
      lichKhamItem.tienKham
    ) {
      this.lichkhamData.push(lichKhamItem);
      this.storageService.saveLichkhamData(this.lichkhamData);
      this.tinhTongGiaKham();
    }
    this.tinhTongGiaKham();
  }
  loadLichkhamData() {
    this.lichkhamData = this.storageService.getLichkhamData() || [];
  }
  tinhTongGiaKham() {
    this.tongGiaKham = this.lichkhamData.reduce(
      (total, item) => total + item.tienKham,
      0
    );
  }

  addChuyenKhoa() {
    // Xóa các session liên quan
    const sessionKeys = ['giotruc'];
    this.storageService.removeSessions(sessionKeys);
    const benhvien = this.storageService.getFromSession('benhvien');
    // Chuyển hướng đến trang chọn chuyên khoa
    this.router.navigate(['/nguoidung/chuyenkhoa', benhvien.id]);
  }

  xoaLichKham(lichKhamItem: any) {
    const index = this.lichkhamData.indexOf(lichKhamItem);
    if (index > -1) {
      this.lichkhamData.splice(index, 1);
      this.tinhTongGiaKham();
      this.storageService.saveLichkhamData(this.lichkhamData);
      this.loadLichkhamData();
    }
  }
  datLich() {
    // Tạo mảng mới chỉ lấy gioTrucId và hoSoId từ lichkhamData
    const lichKhamIds = this.lichkhamData.map((item) => ({
      gioTrucId: item.gioTrucId,
      hoSoId: item.hoSoId,
    }));
    // Gửi mảng lichKhamIds lên server
    this.lichKhamService.createListLichKham(lichKhamIds).subscribe({
      next: (data) => {
        this.toastr.success("Đăng ký lich khám thành công")
        // Xử lý thành công
        // Clear lichkhamData và cập nhật lại trạng thái của component
        this.router.navigate(['/nguoidung/home'])
      },
      error: (error) => {
        this.toastr.error("Có lỗi! Hãy đăng ký lại")
      },
    });
  }
}
