import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { MovieService } from './services/movie.service';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { SingleMovieResolver } from './services/resolvers/single-movie';
import { MovieListResolver } from './services/resolvers/movie-list';
import { AppMoviesModule } from './components/movies-module';
import { HighlightDirective } from './highlight.directive';
import { AuthenticationModule } from '../authentication/authentication.module';



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
    AppMoviesModule,
    AuthenticationModule
  ],
  providers:[
     MovieService, 
     SingleMovieResolver,
     MovieListResolver
  ]
})
export class AppModule { 
}
