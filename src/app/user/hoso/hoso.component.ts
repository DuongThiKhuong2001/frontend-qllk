import { StorageService } from 'src/app/_services/storage.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HoSoService } from 'src/app/_services/hoso.service';


@Component({
  selector: 'app-ho-so',
  templateUrl: './hoso.component.html',
  styleUrls: ['./hoso.component.css'],
  providers: [DatePipe],
})
export class HosoComponent implements OnInit {
  hoSo: any;

  constructor(
    private hoSoService: HoSoService,
    private router: Router,
    private storageService:StorageService
  ) {}

  ngOnInit(): void {
    this.loadHoSo();
  }
  loadHoSo() {
    this.hoSoService.getHoSo().subscribe((data: any) => {
      this.hoSo = data;
    });
  }
  createHoso() {
    this.router.navigate(['nguoidung/themhoso']);
  }
  deleteHoso(id: any) {
    this.hoSoService.deleteHoSo(id).subscribe(() => {
      alert('Xóa thành công');
      this.loadHoSo();
    });
  }
  continueHoso(id: any) {
    this.hoSoService.getHoSoById(id).subscribe((data: any) => {
      this.storageService.saveToSession('hoso', data);
      this.router.navigate(['nguoidung/cosoyte']);
    });

  }
}
