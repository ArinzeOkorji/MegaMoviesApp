import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-movie-detail-modal',
  templateUrl: './movie-detail-modal.component.html',
  styleUrls: ['./movie-detail-modal.component.scss']
})
export class MovieDetailModalComponent implements OnInit {
  @Input() modalId = 'modal-dialog';
  @Input() elementId: string;
  @Input() title: string;
  favorites;

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  hideModal() {
    this.modalService.hideModal();
  }

  addToFavorites(movie) {
    if (sessionStorage.favorites) {
     this.favorites = JSON.parse(sessionStorage.getItem('Favorites'));
    } else {
     this.favorites = [];
    }
 this.favorites.push(movie);
    console.log(this.favorites);
    sessionStorage.setItem('Favorites', JSON.stringify(this.favorites));

    const retrievedObject = sessionStorage.getItem('Favorites');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }

}
