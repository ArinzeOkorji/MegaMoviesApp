import { Component, OnInit } from '@angular/core';
import { AddToFavoritesService } from '../common/add-to-favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: any;

  constructor(private favoritesService: AddToFavoritesService) { }

  ngOnInit() {
    if (sessionStorage.getItem('Favorites')) {
   this.favorites =  JSON.parse(sessionStorage.getItem('Favorites'));
    } else {
      this.favorites = null;
    }
  }

  // Add (or remove) from favorites in sessionStorage
  addToFavorites(movie) {
    this.favoritesService.addToFavorites(movie);

   this.favorites =  JSON.parse(sessionStorage.getItem('Favorites'));
  }

}
