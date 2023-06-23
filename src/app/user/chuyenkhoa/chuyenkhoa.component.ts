// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ChuyenkhoaService } from 'src/app/_services/chuyenkhoa.service';

// @Component({
//   selector: 'app-chuyenkhoa',
//   templateUrl: './chuyenkhoa.component.html',
//   styleUrls: ['./chuyenkhoa.component.css'],
// })
// export class ChuyenkhoaComponent {
//   displayedColumns: string[] = ['maChuyenKhoa', 'tenChuyenKhoa', 'actions'];
//   dataSource: any;

//   constructor(
//     private chuyenkhoaService: ChuyenkhoaService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       const benhVienId = params['id'];
//       this.loadChuyenKhoaList(benhVienId);
//     });
//   }

//   loadChuyenKhoaList(benhVienId: any): void {
//     this.chuyenkhoaService.getCKByBV(benhVienId).subscribe((data) => {
//       this.dataSource = data;
//       console.log(this.dataSource);
//     });
//   }

//   chonChuyenKhoa(id: any) {
//     alert(id);
//   }
// }
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChuyenkhoaService } from 'src/app/_services/chuyenkhoa.service';

@Component({
  selector: 'app-chuyenkhoa',
  templateUrl: './chuyenkhoa.component.html',
  styleUrls: ['./chuyenkhoa.component.css'],
})
export class ChuyenkhoaComponent {
  displayedColumns: string[] = ['maChuyenKhoa', 'tenChuyenKhoa', 'actions'];
  dataSource: any;

  constructor(
    private chuyenkhoaService: ChuyenkhoaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const benhVienId = params['id'];
      this.loadChuyenKhoaList(benhVienId);
    });
  }

  loadChuyenKhoaList(benhVienId: any): void {
    this.chuyenkhoaService.getCKByBV(benhVienId).subscribe((data) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  chonChuyenKhoa(id: any) {
    this.router.navigate(['nguoidung/bacsi', id]); // Chuyển hướng đến trang hiển thị danh sách bác sĩ của chuyên khoa
  }
}
