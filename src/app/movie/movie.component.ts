import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from '../models/Movie';
import { RouterModule } from '@angular/router';
import { SingleMovieResolver } from '../services/resolvers/single-movie';


@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterModule],
  providers: [SingleMovieResolver], 
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie: Movie | undefined;
  imagePath:string | undefined;

  @Output()
  clickButtonEmiter:EventEmitter<number>=new EventEmitter<number>();
  
  ngOnInit() {
    // console.log(this.movie);
    this.imagePath='https://image.tmdb.org/t/p/w500'+this.movie?.poster_path;
  }

  clickButton(){
    // console.log(this.movie?.id);
    this.clickButtonEmiter.emit(this.movie?.id)
  }
}
