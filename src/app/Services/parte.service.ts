import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ParteService {

  private baseUrl = 'http://apishikoba.local'

  constructor(private http: HttpClient, private login:LoginService) { }

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
    const url = "http://apishikoba.local/profesores/3/partes";
    const authToken = this.login.tokenUser;

    let headers = new HttpHeaders({ Authorization: 'Bearer ' + authToken});
    let params = new HttpParams();
    console.log(authToken);
   // params = params.append('maxResults', '10');
    return this.http.get(url, { headers:headers, params: params } );




   // return this.http.get(`${this.baseUrl}/profesores/16/partes`);
  }
}
