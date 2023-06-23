import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root',
})
export class LichKhamService {
  constructor(private http: HttpClient) {}

  getAllLichKham(): Observable<any> {
    return this.http.get(`${API_URL}/lichkham`);
  }

  getLichKhamById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/lichkham/${id}`);
  }

  createLichKham(data: any): Observable<any> {
    return this.http.post(`${API_URL}/lichkham`, data);
  }

  updateLichKham(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/lichkham/${id}`, data);
  }

  deleteLichKham(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/lichkham/${id}`);
  }
}
