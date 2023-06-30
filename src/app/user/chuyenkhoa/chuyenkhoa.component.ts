import { CosoyteService } from 'src/app/_services/cosoyte.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChuyenkhoaService } from 'src/app/_services/chuyenkhoa.service';
import { StorageService } from 'src/app/_services/storage.service';


@Component({
  selector: 'app-chuyenkhoa',
  templateUrl: './chuyenkhoa.component.html',
  styleUrls: ['./chuyenkhoa.component.css'],
})
export class ChuyenkhoaComponent {
  displayedColumns: string[] = ['tenChuyenKhoa', 'actions'];
  dataSource: any;
  benhVien: any;

  constructor(
    private chuyenkhoaService: ChuyenkhoaService,
    private route: ActivatedRoute,
    private router: Router,
    private cosoyteService: CosoyteService,
    private storageService:StorageService
  ) {}

  getBenhVien(id: any) {
    this.cosoyteService.getCosoyteById(id).subscribe((data) => {
      this.benhVien = data;
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const benhVienId = params['id'];
      this.loadChuyenKhoaList(benhVienId);
      this.getBenhVien(benhVienId);
    });
  }

  loadChuyenKhoaList(benhVienId: any): void {
    this.chuyenkhoaService.getCKByBV(benhVienId).subscribe((data) => {
      this.dataSource = data;
    });
  }

  chonChuyenKhoa(id: any) {
    this.chuyenkhoaService.getCKById(id).subscribe((data: any) => {
      this.storageService.saveToSession('chuyenkhoa', data);
      this.router.navigate(['nguoidung/bacsi', id]);
    });

  }
}
