import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { filter, map } from 'rxjs/operators';

const JSON_HOST = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient) { }
  // CARD IMAGES URL: https://imgur.com/a/sSH1tlx
  getCards () {
    return this.http.get<any>(JSON_HOST + 'cards').pipe();
  }

  getCard (id: number) {
    return this.http.get<any>(JSON_HOST + 'cards/' + id).pipe();
  }

  getAuth () {
    return this.http.get<any>(JSON_HOST + 'auth').pipe();
  }

  postCard (data) {
    return this.http.post<any>(JSON_HOST + 'cards/', data).pipe();
  }

  putCard (id: number, data) {
    return this.http.put<any>(JSON_HOST + 'cards/' + id, data).pipe();
  }

  deleteCard (id: number) {
    console.log(id);
    return this.http.delete<any>(JSON_HOST + 'cards/' + id).pipe();
  }

  /*postComment (id: number, data) {
    console.log(id);
    console.log(data);
    return this.http.post<any>(JSON_HOST + 'cards/' + id + '/comments', data).pipe();
  }*/
}
