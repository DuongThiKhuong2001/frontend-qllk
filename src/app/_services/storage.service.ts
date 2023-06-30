import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cookieService: CookieService) {}

  clean(): void {
    this.cookieService.delete(USER_KEY);
  }

  public saveUser(user: any): void {
    this.cookieService.delete(USER_KEY);
    this.cookieService.set(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = this.cookieService.get(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    return this.cookieService.check(USER_KEY);
  }

  public signOut(): void {
    this.cookieService.delete(USER_KEY);
  }
  // Lưu đối tượng vào session dưới dạng JSON
  public saveToSession(key: string, data: any) {
    const jsonData = JSON.stringify(data);
    sessionStorage.setItem(key, jsonData);
  }

  // Lấy đối tượng từ session dưới dạng JSON
  public getFromSession(key: string) {
    const jsonData = sessionStorage.getItem(key);
    if (jsonData) {
      return JSON.parse(jsonData);
    }
    return null;
  }
  saveLichkhamData(lichkhamData: any[]) {
    sessionStorage.setItem('lichkhamData', JSON.stringify(lichkhamData));
  }

  getLichkhamData(): any[] {
    const storedData = sessionStorage.getItem('lichkhamData');
    return storedData ? JSON.parse(storedData) : [];
  }
  removeSessions(sessionKeys: string[]) {
    sessionKeys.forEach((key) => {
      sessionStorage.removeItem(key);
    });
  }
}
