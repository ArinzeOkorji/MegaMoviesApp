import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) { }

  fetchMovieList(genreId): Observable<any> {
    return  this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=f82888e52c2c623f1d422ce83b2f79ee&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`);
  }
}
