import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AddToFavoritesService {
  favorites: any;

  addToFavorites(movies) {
    console.log( movies);
    let movie = JSON.stringify(movies);
     movie = JSON.parse(movie);


    console.log('Movie after: ' + movie);
    if (sessionStorage.getItem('Favorites')) {
      this.favorites = JSON.parse(sessionStorage.getItem('Favorites'));
     } else {
      this.favorites = [];
     }

     console.log(this.favorites);
     console.log(movie);
     const existingMovieInFavorites = this.favorites.find(x => x.id === movie['id']);

     if (existingMovieInFavorites) {
      this.favorites = this.favorites.filter(m => {
        return m.id !== movie['id'];
      });
      console.log(this.favorites);
     } else {
      console.log(movie);
       this.favorites.unshift(movie);

      console.log(this.favorites);
     }

     sessionStorage.setItem('Favorites', JSON.stringify(this.favorites));

     const rawFavorites = sessionStorage.getItem('Favorites');
     this.favorites = JSON.parse(rawFavorites);
  }
}
