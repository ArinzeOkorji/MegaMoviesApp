import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalService } from '../movie-detail-modal/modal.service';
import { MovieListService } from './movie-list.service';
import { AddToFavoritesService } from '../common/add-to-favorites.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieCollection: any;
  movie;
  favorites;

  constructor(public modalService: ModalService,
     private activatedRoute: ActivatedRoute,
     private movieListService: MovieListService,
     private favoritesService: AddToFavoritesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      const genreId = +param['id'];

      // fetch movie list
      this.movieListService.fetchMovieList(genreId)
      .subscribe(
        res => {
          this.movieCollection = res['results'];
          this.movieCollection.forEach(movie => {
            movie['release_date'] = new Date(movie['release_date']).getFullYear();
            movie['isLiked'] = false;
            movie['isNotLiked'] = true;
          });
        },
        err => console.log(err)
      );
    });
  }

  showDetails(movie) {
    this.movie = movie;
  }

  addToFavorites(movie) {
    this.favoritesService.addToFavorites(movie);
  }

}
