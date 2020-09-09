import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ParteService {

  private baseUrl = 'http://apishikoba.local'

  constructor(private http: HttpClient) { }

  getParte(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/partes/${id}`);
  }

  createParte(parte: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, parte);
  }

  updateParte(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteParte(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPartesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profesores/16/partes`);
  }
}
