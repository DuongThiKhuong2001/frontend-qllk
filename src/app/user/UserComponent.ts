import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  template: '<router-outlet></router-outlet>',
  styles: [
    `
      .mat-toolbar.mat-dark {
        background: #000;
        color: #fff;
      }
    `,
  ],
})
export class UserComponent {
  title = 'angularmaterial';
  private roles: string = '';
  isLoggedIn = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    const user = this.storageService.getUser();
    this.roles = user.quyen;
    if (!this.isLoggedIn || this.roles !== 'USER') {
      this.router.navigate(['/dangnhap']);
    }
    //tách hai trường hợp thêm trang 403
  }
}
