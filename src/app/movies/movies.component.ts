import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';

import { MovieComponent } from '../movie/movie.component';
import { Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SingleMovieResolver } from '../services/resolvers/single-movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  providers: [SingleMovieResolver],
  imports: [MovieComponent, NgFor, NgIf, HttpClientModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie> = [];
  singleMovie: Movie | undefined;
  inTheatreMovies: Array<Movie> = [];
  nowPlayingMovies: Array<Movie> = [];
  topRatedMovies: Array<Movie> = [];
  message = null;
  popularSub: Subscription | undefined;

  constructor(
    private moviesService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const data = this.route.snapshot.data['zippedMovies'];
    console.log(data);

    this.popularSub = this.moviesService
      .getPopularMovies()
      .subscribe((data: any) => {
        this.popularMovies = data;
        this.singleMovie = this.popularMovies[0];
      });

    this.moviesService.getInTheatreMovies().subscribe((data: any) => {
      this.inTheatreMovies = data;
    });

    this.moviesService.getNowPlayingMovies().subscribe((data: any) => {
      this.nowPlayingMovies = data;
    });

    this.moviesService.getTopRatedMovies().subscribe((data: any) => {
      this.topRatedMovies = data;
    });
  }
  ngOnDestroy() {
    this.popularSub?.unsubscribe;
  }

  fromChild(event: any) {
    // console.log(event);
    this.message = event;
  }
}
