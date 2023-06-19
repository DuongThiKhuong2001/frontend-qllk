import { Component } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isTrangChuActive: boolean = true;
  isGioiThieuActive: boolean = false;
  isLienHeActive: boolean = false;
  constructor(private storageService: StorageService) {}
  // Các phương thức để xử lý sự kiện click
  setActiveButton(button: string) {
    this.isTrangChuActive = button === 'trangChu';
    this.isGioiThieuActive = button === 'gioiThieu';
    this.isLienHeActive = button === 'lienHe';
  }
  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }
}
