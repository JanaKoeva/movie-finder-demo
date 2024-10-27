import { Component, OnInit, ViewChild } from '@angular/core';
import Movie from '../../models/Movie';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { query } from 'express';
import { MovieComponent } from '../movie/movie.component';
import { NgFor, NgIf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { SearchResolver } from '../../services/resolvers/search-resolver';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  providers:[SearchResolver],
  imports: [MovieComponent, NgFor, NgIf],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent implements OnInit {

  searchedMovies: Movie[]=[];


  constructor( private route: ActivatedRoute, private movieService:MovieService) { }


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const query = params['search'];
      //console.log(query);
      
      if (query) {
        this.movieService.searchMovie(query).subscribe((data:Movie[]) => {
          const results:any=data //['results'];
          //console.log(results);
          
           this.searchedMovies =results.results;
        });
      }
    });
  }






    // const query = this.route.snapshot.queryParams['search'];
    // // console.log(query);
    
    // this.searchedMovies = this.route.snapshot.data['SearchResolver'].results;

    
  }



