import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root',
})
export class HoSoService {
  constructor(private http: HttpClient) {}

  getHoSo(): Observable<any> {
    return this.http.get(`${API_URL}/hoso`);
  }
  getHoSoOfUser(id: any): Observable<any> {
    return this.http.get(`${API_URL}/hoso/${id}`);
  }
  saveHoSo(data: any): Observable<any> {
    return this.http.post(`${API_URL}/hoso`, data);
  }

  updateHoSo(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/hoso/${id}`, data);
  }

  deleteHoSo(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/hoso/${id}`);
  }

  getHoSoById(code: number): Observable<any> {
    return this.http.get(`${API_URL}/hoso/${code}`);
  }
}
