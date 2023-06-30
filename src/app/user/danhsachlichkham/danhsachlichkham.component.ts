import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasiService } from 'src/app/_services/bacsi.service';
import { ChuyenkhoaService } from 'src/app/_services/chuyenkhoa.service';
import { GiotrucService } from 'src/app/_services/giotruc.service';
import { LichTrucService } from 'src/app/_services/lichtruc.service';

@Component({
  selector: 'app-danhsachlichkham',
  templateUrl: './danhsachlichkham.component.html',
  styleUrls: ['./danhsachlichkham.component.css']
})
export class DanhsachlichkhamComponent {
  constructor(
    private lichTrucService: LichTrucService,
    private router: Router,
    private giotrucService: GiotrucService,
    private basiService: BasiService,
     private chuyenkhoaService: ChuyenkhoaService
  ) {}

  ngOnInit(): void {

  }

}
