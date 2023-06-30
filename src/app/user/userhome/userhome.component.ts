import { StorageService } from 'src/app/_services/storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],
})
export class UserhomeComponent implements OnInit {
  constructor(private router: Router, private storageService:StorageService) { }
  ngOnInit(): void {
    sessionStorage.clear();
  }
;

  bookcare() {
       this.router.navigate(['nguoidung/hoso']);
  }
}
