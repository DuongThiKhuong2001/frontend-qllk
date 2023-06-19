import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HoSoService } from 'src/app/_services/hoso.service';


@Component({
  selector: 'app-ho-so',
  templateUrl: './hoso.component.html',
  styleUrls: ['./hoso.component.css'],
})
export class HosoComponent implements OnInit {
  hoSo: any;

  constructor(private hoSoService: HoSoService, private router: Router) {}

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
}
