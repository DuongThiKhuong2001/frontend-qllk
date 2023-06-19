import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],
})
export class UserhomeComponent {
  constructor(private router: Router) { };

  bookcare() {
       this.router.navigate(['nguoidung/hoso']);

  }
}
