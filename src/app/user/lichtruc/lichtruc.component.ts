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
  selectedGioTruc: any;

  constructor(
    private lichTrucService: LichTrucService,
    private route: ActivatedRoute,
    private router: Router,
    private basiService: BasiService
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

  loadLichTrucList(bacSiId: any): void {
    this.lichTrucService.getLTbyBS(bacSiId).subscribe((data) => {
      this.lichTrucList = data;
    });
  }
  chonNgayKham(ngayTruc: any) {
    this.selectedNgayTruc = ngayTruc;

    // Đặt giá trị mặc định cho giờ khám (hoặc bạn có thể thiết kế logic riêng)
    this.selectedGioTruc = null;
  }

  // Xử lí sự kiện khi chọn giờ khám
  chonGioKham(gioTruc: any) {
    this.selectedGioTruc = gioTruc;
  }
  chonLichTruc(id: any) {
    this.router.navigate(['nguoidung/lichkham', id]);
  }
}
