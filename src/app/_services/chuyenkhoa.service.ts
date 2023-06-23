import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root',
})
export class ChuyenkhoaService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getCKList(): Observable<any> {
    return this.http.get(`${API_URL}/chuyenkhoa`);
  }

  getCKById(id: any): Observable<any> {
    return this.http.get(`${API_URL}/chuyenkhoa/${id}`);
  }

  createCK(data: any): Observable<any> {
    return this.http.post(`${API_URL}/chuyenkhoa`, data);
  }

  updateCK(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/chuyenkhoa/${id}`, data);
  }

  deleteCK(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/chuyenkhoa/${id}`);
  }
  getCKByBV(id: any): Observable<any> {
    return this.http.get(`${API_URL}/chuyenkhoa/benhvien/${id}`);
  }
}
