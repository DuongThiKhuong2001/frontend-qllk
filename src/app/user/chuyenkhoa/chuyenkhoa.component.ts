import { CosoyteService } from 'src/app/_services/cosoyte.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChuyenkhoaService } from 'src/app/_services/chuyenkhoa.service';


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
    private cosoyteService: CosoyteService
  ) {}

  getBenhVien(id: any) {
    this.cosoyteService.getCosoyteById(id).subscribe((data) => {
      this.benhVien = data;
      console.log(data)
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
      console.log(this.dataSource);
    });
  }

  chonChuyenKhoa(id: any) {
    sessionStorage.setItem('chuyenkhoaId', id);
    this.router.navigate(['nguoidung/bacsi', id]); // Chuyển hướng đến trang hiển thị danh sách bác sĩ của chuyên khoa
  }
}
