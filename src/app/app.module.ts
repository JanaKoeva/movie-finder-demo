import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { MovieService } from './services/movie.service';
import { MoviesComponent } from './movies/movies.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { SingleMovieResolver } from './services/resolvers/single-movie';
import { MovieListResolver } from './services/resolvers/movie-list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent, 
    NavbarComponent, 
    LandingComponent,
    MoviesComponent,
    AppRoutingModule,
    HttpClientModule,
    // HttpClient,

  ],
  providers:[
     MovieService, 
     SingleMovieResolver,
     MovieListResolver
  ]
})
export class AppModule { 
}
