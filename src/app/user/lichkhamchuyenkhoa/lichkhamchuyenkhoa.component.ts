import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LichKhamChuyenKhoaService } from 'src/app/_services/lichkhamchuyenkhoa.service';
@Component({
  selector: 'app-lich-kham-chuyen-khoa',
  templateUrl: './lichkhamchuyenkhoa.component.html',
  styleUrls: ['./lichkhamchuyenkhoa.component.css'],
})
// export class LichKhamChuyenKhoaComponent implements OnInit {
//   lichKhamList: any[] | undefined;
//   dataSource: any;
//   hoSo: any;
//   lichKham: any;

//   constructor(
//     private lichKhamChuyenKhoaService: LichKhamChuyenKhoaService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       const chuyenKhoaId = params['id'];
//       this.loadLichKhamChuyenKhoaList(chuyenKhoaId);
//     });
//   }

//  loadLichKhamChuyenKhoaList(chuyenKhoaId: any): void {
//   this.lichKhamChuyenKhoaService
//     .getLKCKbyLKCK(chuyenKhoaId)
//     .subscribe((data) => {
//       this.dataSource = data;
//     });
// }

// }
export class LichKhamChuyenKhoaComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['chuyenKhoa', 'lichKham'];

  constructor(private lichKhamChuyenKhoaService: LichKhamChuyenKhoaService) {}

  ngOnInit() {
    this.getLichKhamChuyenKhoa();
  }

  getLichKhamChuyenKhoa() {
    this.lichKhamChuyenKhoaService.getAllLichKhamChuyenKhoa().subscribe(
      (data: any[]) => {
        this.dataSource = new MatTableDataSource(data);
      },
      (error) => {
        console.log('Error retrieving lich kham chuyen khoa:', error);
      }
    );
  }
}
