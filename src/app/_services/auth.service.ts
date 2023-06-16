import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //hàm đăng nhập được gọi ở auth/login
  login(taiKhoan: string, matKhau: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        taiKhoan,
        matKhau,
      },
      httpOptions
    );
  }

  register(taiKhoan: string, email: string, matKhau: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        taiKhoan,
        email,
        matKhau,
      },
      httpOptions
    );
  }
  // hàm đăng xuất được gọi ở root component
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
