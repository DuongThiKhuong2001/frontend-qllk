import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root',
})
export class CosoyteService {
  constructor(private http: HttpClient) {}

  getCosoyteList(): Observable<any> {
    return this.http.get(`${API_URL}/benhvien`);
  }

  getCosoyteById(id: any): Observable<any> {
    return this.http.get(`${API_URL}/benhvien/${id}`);
  }

  createCosoyte(data: any): Observable<any> {
    return this.http.post(`${API_URL}/benhvien`, data);
  }

  updateCosoyte(id: number, data: any): Observable<any> {
    return this.http.put(`${API_URL}/benhvien/${id}`, data);
  }

  deleteCosoyte(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/benhvien/${id}`);
  }

  // getCosoyteByCode(code: number): Observable<any> {
  //   return this.http.get(`${API_URL}/cosoyte/${code}`);
  // }
}
