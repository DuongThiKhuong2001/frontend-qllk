import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
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
export class RootComponent {
  title = 'angularmaterial';
  private roles: string = '';
  isLoggedIn = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.quyen;
      this.username = user.username;
      if (this.roles === 'ADMIN') {
        this.router.navigate(['/quantrivien']);
      }
      if (this.roles === 'USER') {
        this.router.navigate(['/nguoidung']);
      }
    } else {
      this.router.navigate(['/dangnhap']);
    }
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }
}
