import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { SingleMovieResolver } from './services/resolvers/single-movie';
import { MovieListResolver } from './services/resolvers/movie-list';

export const routes: Routes = [
  
    {
        path:'',
        pathMatch:'full',
        redirectTo:'movies'
      }, 
  {
    path: 'movies',
    component: MoviesComponent,
    resolve:{ zippedMovies:MovieListResolver}
  },
  
  {
    path:'movies/:id', 
    component:MovieDetailsComponent,
    resolve: { singleMovie: SingleMovieResolver }
  },
 
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
     providers: [SingleMovieResolver],
})
export class AppRoutingModule { }