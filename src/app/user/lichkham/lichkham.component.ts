import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LichKhamService } from 'src/app/_services/lichkham.service';

@Component({
  selector: 'app-lichkham',
  templateUrl: './lichkham.component.html',
  styleUrls: ['./lichkham.component.css'],
  providers: [DatePipe],
})
export class LichkhamComponent {
  lichKhamList: any[] | undefined;

  constructor(
    private lichKhamService: LichKhamService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const bacSiId = params['id'];
      this.loadLichKhamList(bacSiId);
    });
  }

  loadLichKhamList(bacSiId: any): void {
    this.lichKhamService.getLKByBS(bacSiId).subscribe((data) => {
      this.lichKhamList = data;
      console.log(this.lichKhamList);
    });
  }
  chonLichKham(id: any) {
    this.router.navigate(['nguoidung/lichkhamchuyenkhoa', id]);
  }
}


