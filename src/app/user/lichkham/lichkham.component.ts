
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasiService } from 'src/app/_services/bacsi.service';
import { GiotrucService } from 'src/app/_services/giotruc.service';
import { LichKhamService } from 'src/app/_services/lichkham.service';

@Component({
  selector: 'app-lichkham',
  templateUrl: './lichkham.component.html',
  styleUrls: ['./lichkham.component.css'],
})
export class LichkhamComponent implements OnInit {
  lichkhamData: any[] = [];
  displayedColumns: string[] = ['bacSi', 'ngayTruc', 'gioTruc', 'hoSo', 'moTa'];
  bacSi: any;
  constructor(
    private lichKhamService: LichKhamService,
    private giotrucService: GiotrucService,
    private basiService: BasiService
  ) {}

  ngOnInit() {
    const bacsiId = sessionStorage.getItem('bacsiId');
    this.getBacSi(bacsiId);
  }
  getBacSi(id: any) {
    this.basiService.getBSById(id).subscribe((data) => {
      this.bacSi = data;
    });
  }

}

