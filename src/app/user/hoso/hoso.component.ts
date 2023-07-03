import { StorageService } from 'src/app/_services/storage.service';
import { DatePipe, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HoSoService } from 'src/app/_services/hoso.service';
import { ToastrService } from 'ngx-toastr';

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
    private storageService: StorageService,
    private toastr: ToastrService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.loadHoSo();
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  loadHoSo() {
    const user = this.storageService.getUser();
    this.hoSoService.getHoSoOfUser(user.id).subscribe((data: any) => {
      this.hoSo = data;
    });
  }
  createHoso() {
    this.router.navigate(['nguoidung/themhoso']);
  }
  deleteHoso(id: any) {
    this.hoSoService.deleteHoSo(id).subscribe(() => {
      this.loadHoSo();
      this.toastr.success('Xóa hồ sơ thành công');
    });
  }

  continueHoso(id: any) {
    this.hoSoService.getHoSoById(id).subscribe((data: any) => {
      this.storageService.saveToSession('hoso', data);
      this.router.navigate(['nguoidung/cosoyte']);
    });
  }
}
