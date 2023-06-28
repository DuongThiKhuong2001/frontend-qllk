import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root',
})
export class LichKhamChuyenKhoaService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getAllLichKhamChuyenKhoa(): Observable<any> {
    return this.http.get(`${API_URL}/lichkhamchuyenkhoa`);
  }

  getLichKhamChuyenKhoaById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/lichkhamchuyenkhoa/${id}`);
  }

  createLichKhamChuyenKhoa(data: any): Observable<any> {
    return this.http.post(`${API_URL}/lichkhamchuyenkhoa`, data);
  }

  updateLichKhamChuyenKhoa(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/lichkhamchuyenkhoa/${id}`, data);
  }

  deleteLichKhamChuyenKhoa(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/lichkhamchuyenkhoa/${id}`);
  }
  getLKCKbyLKCK(id: any): Observable<any> {
    return this.http.get(
      `${API_URL}/lickhamchuyenkhoa/lichkham/${id}/chuyenkhoa/${id}`
    );
  }
}
