import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from 'src/app/_services/location.service';
import { HoSoService } from 'src/app/_services/hoso.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-hoso-form',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css'],

})
export class FormdesignComponent implements OnInit {
  customerform: any;
  userId: any;
  tinhList!: any[]; // Danh sách tỉnh
  huyenList!: any[]; // Danh sách huyện
  xaList!: any[]; // Danh sách xã

  constructor(
    private formBuilder: FormBuilder,
    private hoSoService: HoSoService,
    private storageService: StorageService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    const user = this.storageService.getUser();
    this.userId = user?.id;
    console.log(this.userId);

    this.customerform = this.formBuilder.group({
      ten: ['', Validators.required],
      ngaySinh: ['', Validators.required],
      gioiTinh: ['', Validators.required],
      soDienThoai: ['', Validators.required],
      ngheNghiep: ['', Validators.required],
      cmnd: ['', Validators.required],
      email: ['', Validators.required],
      danToc: ['', Validators.required],
      diaChi: ['', Validators.required],
      tinh: ['', Validators.required],
      huyen: ['', Validators.required],
      xa: ['', Validators.required],
    });

    // Lấy danh sách tỉnh từ API
    this.locationService.getProvinces().subscribe((provinces) => {
      this.tinhList = provinces;
    });

    // Khởi tạo danh sách huyện và xã rỗng
    this.huyenList = [];
    this.xaList = [];
  }

  onTinhChange(tinhCode: number) {
    if (tinhCode) {
      const tinh = this.tinhList.find((item) => item.code === tinhCode);
      this.huyenList = tinh.districts;
      this.xaList = [];
    } else {
      this.huyenList = [];
      this.xaList = [];
    }
  }

  onHuyenChange(huyenCode: number) {
    if (huyenCode) {
      const huyen = this.huyenList.find((item) => item.code === huyenCode);
      this.xaList = huyen.wards;
    } else {
      this.xaList = [];
    }
  }

  SaveHoSo() {
    if (this.customerform.invalid) {
      return;
    }
    const diaChi = this.customerform.value.diaChi;
    const xa = this.xaList.find(
      (item) => item.code === this.customerform.value.xa
    ).name;
    const huyen = this.huyenList.find(
      (item) => item.code === this.customerform.value.huyen
    ).name;
    const tinh = this.tinhList.find(
      (item) => item.code === this.customerform.value.tinh
    ).name;
    const hoSoRequest = {
      userId: this.userId,
      ten: this.customerform.value.ten,
      ngaySinh: this.customerform.value.ngaySinh,
      gioiTinh: this.customerform.value.gioiTinh,
      soDienThoai: this.customerform.value.soDienThoai,
      ngheNghiep: this.customerform.value.ngheNghiep,
      cmnd: this.customerform.value.cmnd,
      email: this.customerform.value.email,
      danToc: this.customerform.value.danToc,
      diaChi: `${diaChi}, ${xa}, ${huyen}, ${tinh}`,
    };
    this.hoSoService.saveHoSo(hoSoRequest).subscribe((res) => {
      console.log('HoSo created successfully.');
    });
  }

  clearForm() {
    this.customerform.reset();
  }

  showForm() {
    // Xử lý hiển thị form
  }


}
