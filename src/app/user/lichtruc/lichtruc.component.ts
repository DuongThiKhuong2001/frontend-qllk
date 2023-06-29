import { GiotrucService } from './../../_services/giotruc.service';
import { ChuyenkhoaService } from './../../_services/chuyenkhoa.service';
import { Component, OnInit } from '@angular/core';
import { LichTrucService } from 'src/app/_services/lichtruc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BasiService } from 'src/app/_services/bacsi.service';

@Component({
  selector: 'app-lich-truc',
  templateUrl: './lichtruc.component.html',
  styleUrls: ['./lichtruc.component.css'],
})
export class LichTrucComponent implements OnInit {
  lichTrucList: any[] | undefined;
  bacSi: any;
  selectedNgayTruc: any;
  gioTrucList: any[] =[];
  constructor(
    private lichTrucService: LichTrucService,
    private route: ActivatedRoute,
    private router: Router,
    private giotrucService: GiotrucService,
    private basiService: BasiService // private chuyenkhoaService: ChuyenkhoaService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const bacSiId = params['id'];
      this.loadLichTrucList(bacSiId);
      this.getBacSi(bacSiId);
    });
  }

  getBacSi(id: any) {
    this.basiService.getBSById(id).subscribe((data) => {
      this.bacSi = data;
    });
  }
  layDSGioTruc(lichTrucId: any) {
    this.giotrucService.getGTbyLT(lichTrucId).subscribe({
      next: (data) => {
        this.gioTrucList = data;
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách giờ trực:', error);
      },
    });
  }

  loadLichTrucList(bacSiId: any): void {
    this.lichTrucService.getLTbyBS(bacSiId).subscribe((data) => {
      this.lichTrucList = data;
    });
  }
  onNgayTrucSelectionChange() {
    // Lấy giờ trực tương ứng với ngày trực đã chọn
    this.layDSGioTruc(this.selectedNgayTruc.id);
  }
  chonLichTruc(gioTrucId: any) {
    sessionStorage.setItem('gioTrucId', gioTrucId);
    this.router.navigate(['nguoidung/lichkham']);
  }
}
