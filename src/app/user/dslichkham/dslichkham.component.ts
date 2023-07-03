import { StorageService } from 'src/app/_services/storage.service';
import { Component, OnInit } from '@angular/core';
import { LichKhamService } from 'src/app/_services/lichkham.service';

@Component({
  selector: 'app-dslichkham',
  templateUrl: './dslichkham.component.html',
  styleUrls: ['./dslichkham.component.css'],
})
export class DslichkhamComponent implements OnInit {
  lichKhamList: any[] = [];
  displayedColumns: string[] = ['index', 'benhvien','chuyenkhoa','bacsi','ngaykham','giokham','giakham','ten'];
  constructor(private lichKhamService: LichKhamService, private storageService:StorageService) {}

  ngOnInit(): void {
    this.getLichKhamByUser();
  }

  getLichKhamByUser(): void {
     const user = this.storageService.getUser();
    this.lichKhamService.getHSLKbyUser(user.id).subscribe(
      (response) => {
        this.lichKhamList = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
