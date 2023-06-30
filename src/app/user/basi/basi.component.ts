import { ChuyenkhoaService } from './../../_services/chuyenkhoa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasiService } from 'src/app/_services/bacsi.service';
import { CosoyteService } from 'src/app/_services/cosoyte.service';
import { StorageService } from 'src/app/_services/storage.service';

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
    private chuyenkhoaService: ChuyenkhoaService,
    private storageService:StorageService
  ) {}

  ngOnInit(): void {
    this.benhVien = this.storageService.getFromSession('benhvien');
    this.route.params.subscribe((params) => {
      const chuyenKhoaId = params['id'];
      this.loadDoctorList(chuyenKhoaId);
      this.layChuyenKhoa(chuyenKhoaId)
    });
  }
  layChuyenKhoa(id: any){
    this.chuyenkhoaService.getCKById(id).subscribe((data)=>{
      this.chuyenKhoa = data
    })
  }
  loadDoctorList(chuyenKhoaId: any): void {
    this.basiService.getBSByCK(chuyenKhoaId).subscribe((data) => {
      this.doctors = data;
    });
  }
  chonBacsi(id: any) {
    this.basiService.getBSById(id).subscribe((data: any) => {
      // this.storageService.saveToSession('bacsi', data);
      this.router.navigate(['nguoidung/lichtruc', id]);
    });

  }
}
