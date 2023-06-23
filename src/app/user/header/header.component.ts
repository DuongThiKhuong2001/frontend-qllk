import { Component } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isTrangChuActive: boolean = true;
  isGioiThieuActive: boolean = false;
  isLienHeActive: boolean = false;
  isChuyenKhoaActive: boolean = false;
  isBacSiActive: boolean = false;
  constructor(private storageService: StorageService, private router: Router) {}
  setActiveButton(button: string) {
    this.isTrangChuActive = button === 'trangChu';
    this.isGioiThieuActive = button === 'hoSo';
    this.isLienHeActive = button === 'cosoYTe';
    this.isChuyenKhoaActive = button === 'chuyenKhoa';
    this.isBacSiActive = button === 'bacSi';
  }
  goToHomePage() {
    this.router.navigate(['/home']);
  }
  goToHoSoPage() {
    this.router.navigate(['/hoso']);
    // Xử lý logic khác nếu cần thiết
  }

  goToCoSoYTePage() {
    this.router.navigate(['/cosoyte']);
    // Xử lý logic khác nếu cần thiết
  }
  goToChuyenKhoaPage() {
    this.router.navigate(['/chuyenkhoa']);
  }

  goToBacSi() {
    this.router.navigate(['/basi']);
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }
}
