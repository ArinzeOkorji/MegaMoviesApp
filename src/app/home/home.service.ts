import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiKey = 'f82888e52c2c623f1d422ce83b2f79ee';

  constructor(private http: HttpClient) { }

  fetchGenreList(): Observable<any> {
   return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`);
  }

  search(searchQuery): Observable<any> {
    return this.http
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`);
  }
}
