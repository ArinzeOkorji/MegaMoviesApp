import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavoritesComponent } from './favorites/favorites.component';


export  const router: Routes = [
  {path: 'favorites', component: FavoritesComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: ':id', component: MovieListComponent}
  ]},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
