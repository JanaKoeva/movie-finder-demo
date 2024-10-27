import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { SingleMovieResolver } from './services/resolvers/single-movie';
import { MovieListResolver } from './services/resolvers/movie-list';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { SearchResolver } from './services/resolvers/search-resolver';
import { LoginComponent } from '../authentication/login/login.component';

export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  },
  {
    path: 'movies',
    component: MoviesComponent,
    resolve: { zippedMovies: MovieListResolver }
  },

  {
    path: 'movies/search',
    component: MovieSearchComponent,
    resolve: { SearchResolver: SearchResolver }

  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    resolve: { singleMovie: SingleMovieResolver }
  },
  {
    path: 'login',
    component: LoginComponent,
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [SingleMovieResolver],
})
export class AppRoutingModule {

 }