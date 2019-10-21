import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { router } from './app.routes';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailModalComponent } from './movie-detail-modal/movie-detail-modal.component';
import { ModalService } from './movie-detail-modal/modal.service';
import { JQ_TOKEN } from './common/jquery';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { FavoritesComponent } from './favorites/favorites.component';
import { MovieNameFormatter } from './common/movie-name-length.pipe';

const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieListComponent,
    MovieDetailModalComponent,
    ModalTriggerDirective,
    FavoritesComponent,
    MovieNameFormatter
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ModalService,
    {
      provide: JQ_TOKEN, useValue: jQuery
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
