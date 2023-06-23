import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasiService } from 'src/app/_services/bacsi.service';

@Component({
  selector: 'app-bacsi',
  templateUrl: './basi.component.html',
  styleUrls: ['./basi.component.css'],
})
export class BacsiComponent implements OnInit {

  doctors: any[] | undefined;

  constructor(
    private basiService: BasiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const chuyenKhoaId = params['id'];
      this.loadDoctorList(chuyenKhoaId);
    });
  }

  loadDoctorList(chuyenKhoaId: any): void {
    this.basiService.getBSByCK(chuyenKhoaId).subscribe((data) => {
      this.doctors = data;
      console.log(this.doctors);
    });
  }
}
