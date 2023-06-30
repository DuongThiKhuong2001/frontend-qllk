import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiotrucService {
  constructor(private http: HttpClient) {}

  getAllGioTruc(): Observable<any> {
    return this.http.get(`${API_URL}/giotruc`);
  }

  getGioTrucById(id: any): Observable<any> {
    return this.http.get(`${API_URL}/giotruc/${id}`);
  }

  createGioTruc(data: any): Observable<any> {
    return this.http.post(`${API_URL}/giotruc`, data);
  }

  updateGioTruc(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/giotruc/${id}`, data);
  }

  deleteGioTruc(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/giotruc/${id}`);
  }
  getGTbyLT(id: any): Observable<any> {
    return this.http.get(`${API_URL}/giotruc/lichtruc/${id}`);
  }
}
