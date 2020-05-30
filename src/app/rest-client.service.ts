import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { filter, map } from 'rxjs/operators';

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

  postComment (id: number, data) {
    return this.http.post<any>(environment.apiUrl + '/cards/' + id + '/comments', data).pipe();
  }
}
