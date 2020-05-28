import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient) { }

  // JSON HOST: www.npoint.io
  // CARD IMAGES URL: https://imgur.com/a/sSH1tlx
  getCards () {
    return this.http.get<any>(environment.apiUrl + '/cards').pipe();
  }

  getCard (id: number) {
    return this.http.get<any>(environment.apiUrl + '/cards/' + id).pipe();
  }
}
