import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root',
})
export class BasiService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getBSList(): Observable<any> {
    return this.http.get(`${API_URL}/bacsi`);
  }

  getBSById(id: any): Observable<any> {
    return this.http.get(`${API_URL}/bacsi/${id}`);
  }

  createBS(data: any): Observable<any> {
    return this.http.post(`${API_URL}/bacsi`, data);
  }

  updateBS(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/bacsi/${id}`, data);
  }

  deleteBS(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/bacsi/${id}`);
  }
  getBSByCK(id: any): Observable<any> {
    return this.http.get(`${API_URL}/bacsi/chuyenkhoa/${id}`);
  }
}
