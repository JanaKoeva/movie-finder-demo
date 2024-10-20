import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Genre, MovieDetails } from '../models/MovieDetails';
import { NgIf } from '@angular/common';
import { map } from 'rxjs/operators'
import { SingleMovieResolver } from '../services/resolvers/single-movie';


@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  id: string = '';
  movie!: MovieDetails;
  movieGenres!: string;

  constructor(
    private route: ActivatedRoute, 
    // private singleMovie:SingleMovieResolver
  ) { }

  ngOnInit() {

    this.movie=this.route.snapshot.data['singleMovie'];
    console.log(this.movie);
   
    
    this.movieGenres=this.movie.genres
    .map( (el:Genre) => el['name'])
    .join(', ');
   

    // //1st var
    // this.id = this.route.snapshot.params['id'];
   
    
    
    // //2nd var
    // this.route.params.subscribe((params: Params) => {
    //   this.id = params['id'];

    //   this.movieService
    //     .getMovieByID(this.id)
    //     .subscribe((data) =>{ 
    //       this.movie = data;
    //       });
    // });
  }
}
