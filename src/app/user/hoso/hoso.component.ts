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
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.loadHoSo();
  }
  loadHoSo() {
    this.hoSoService.getHoSo().subscribe((data: any) => {
      this.hoSo = data;
      console.log(this.hoSo);
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
  continueHoso() {
    this.router.navigate(['nguoidung/cosoyte']);
  }
}
