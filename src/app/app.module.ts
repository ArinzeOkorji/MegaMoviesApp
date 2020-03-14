import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

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
import { SignupComponent } from './auth/signup/signup.component';
import { CacheService } from './cache.service';
import { CacheInterceptor } from './cache.interceptor';

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
    MovieNameFormatter,
    SignupComponent
  ],
  imports: [
    AngularFirestoreModule,
    BrowserModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ModalService,
    {
      provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true
    },
    {
      provide: JQ_TOKEN, useValue: jQuery, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
