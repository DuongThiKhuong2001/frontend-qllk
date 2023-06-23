import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root',
})
export class LichTrucService {
  constructor(private http: HttpClient) {}

  getAllLichTruc(): Observable<any> {
    return this.http.get(`${API_URL}/lichtruc`);
  }

  getLichTrucById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/lichtruc/${id}`);
  }

  createLichTruc(data: any): Observable<any> {
    return this.http.post(`${API_URL}/lichtruc`, data);
  }

  updateLichTruc(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/lichtruc/${id}`, data);
  }

  deleteLichTruc(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/lichtruc/${id}`);
  }
}
