import { ChuyenkhoaService } from './../../_services/chuyenkhoa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasiService } from 'src/app/_services/bacsi.service';
import { CosoyteService } from 'src/app/_services/cosoyte.service';

@Component({
  selector: 'app-bacsi',
  templateUrl: './basi.component.html',
  styleUrls: ['./basi.component.css'],
})
export class BacsiComponent implements OnInit {
  doctors: any[] | undefined;
  benhVien: any;
  chuyenKhoa: any;
  constructor(
    private basiService: BasiService,
    private route: ActivatedRoute,
    private router: Router,
    private cosoyteService: CosoyteService,
    private chuyenkhoaService: ChuyenkhoaService
  ) {}

  ngOnInit(): void {
    const benhvienId = sessionStorage.getItem('benhvienId');
    this.getBenhVien(benhvienId);
    const chuyenKhoaId = sessionStorage.getItem('chuyenkhoaId');
    this.getChuyenKhoa(chuyenKhoaId);
    this.route.params.subscribe((params) => {
      const chuyenKhoaId = params['id'];
      this.loadDoctorList(chuyenKhoaId);
    });
  }
  getBenhVien(id: any) {
    this.cosoyteService.getCosoyteById(id).subscribe((data) => {
      this.benhVien = data;
      console.log(data);
    });
  }
  getChuyenKhoa(id: any) {
    this.chuyenkhoaService.getCKById(id).subscribe((data) => {
      this.chuyenKhoa = data;
      console.log(data);
    });
  }
  loadDoctorList(chuyenKhoaId: any): void {
    this.basiService.getBSByCK(chuyenKhoaId).subscribe((data) => {
      this.doctors = data;
      console.log(this.doctors);
    });
  }
  chonBacsi(id: any) {
    this.router.navigate(['nguoidung/lichtruc', id]);
  }
}
