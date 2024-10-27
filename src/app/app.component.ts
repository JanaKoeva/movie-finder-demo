import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from "./landing/landing.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { FootherComponent } from "./foother/foother.component";
import { MoviesComponent } from './components/movies/movies.component';
import { MovieService } from './services/movie.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SingleMovieResolver } from './services/resolvers/single-movie';
import { MovieListResolver } from './services/resolvers/movie-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingComponent, CarouselComponent, FootherComponent, MoviesComponent,
      HttpClientModule, FormsModule
     ],
  providers: [
    MovieService, 
    HttpClient,
     SingleMovieResolver,
     MovieListResolver,
  ], // Add your service here (if not using providedIn: 'root')
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'movie-finder-demo';
}
