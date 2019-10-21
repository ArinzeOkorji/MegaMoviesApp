import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ModalService } from '../movie-detail-modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerm;
  movie;
  availableGenres;
  searchResults;

  constructor(private homeService: HomeService, public modalService: ModalService) { }

  ngOnInit() {
   // Fetch genre list
   this.homeService.fetchGenreList()
    .subscribe(
      (res) => {
        this.availableGenres = res['genres'];
      },
      err => {
        console.log(err);
      }
    );
  }

  showDetails(movie) {
    this.movie = movie;
  }

  search(form) {
    this.homeService.search(form.value.search)
    .subscribe(
      (res) => {
        this.searchResults = res['results'];
        this.searchResults.forEach(result => {
          // Format the release date
          result['release_date'] = new Date(result['release_date']).getFullYear();
        });
      },
      (err) => {
        console.log(err);
      }
    );


  }

}
