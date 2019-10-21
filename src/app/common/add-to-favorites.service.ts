import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AddToFavoritesService {
  favorites: any;

  addToFavorites(movies) {
    let movie = JSON.stringify(movies);
     movie = JSON.parse(movie);

    if (sessionStorage.getItem('Favorites')) {
      this.favorites = JSON.parse(sessionStorage.getItem('Favorites'));
     } else {
      this.favorites = [];
     }

     const existingMovieInFavorites = this.favorites.find(x => x.id === movie['id']);

     if (existingMovieInFavorites) {
      this.favorites = this.favorites.filter(m => {
        return m.id !== movie['id'];
      });
     } else {
       this.favorites.unshift(movie);
     }

     sessionStorage.setItem('Favorites', JSON.stringify(this.favorites));

     const rawFavorites = sessionStorage.getItem('Favorites');
     this.favorites = JSON.parse(rawFavorites);
  }
}
