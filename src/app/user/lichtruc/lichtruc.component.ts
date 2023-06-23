import { Component, OnInit } from '@angular/core';
import { LichTrucService } from 'src/app/_services/lichtruc.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-lich-truc',
  templateUrl: './lichtruc.component.html',
  styleUrls: ['./lichtruc.component.css'],
})
export class LichTrucComponent implements OnInit {
  lichTrucList: any[] = [];

  constructor(private lichTrucService: LichTrucService) {}

  ngOnInit() {
    this.loadLichTruc();
  }

  loadLichTruc() {
    this.lichTrucService.getAllLichTruc().subscribe(
      (response) => {
        this.lichTrucList = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
