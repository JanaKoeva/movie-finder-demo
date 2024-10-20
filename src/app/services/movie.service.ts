import { HttpClient , HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Movie from '../models/Movie';
import { MovieDetails } from '../models/MovieDetails';
import { SingleMovieResolver } from './resolvers/single-movie';

const BASE_URL = 'https://api.themoviedb.org/3/'; //https://api.themoviedb.org/3/;
const POPULAR = 'movie/popular';
const IN_THEATRE = 'discover/movie';
const NOW_PLAYING = 'movie/now_playing';
const TOP_RATED='movie/top_rated' 

const API_KEY = '?api_key=13df6478b7881202b236afe2517ed3ee';
// const headers = new HttpHeaders({
//   Authorization: `Bearer ${API_KEY}`,
//   Accept: 'application/json',
// });

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  


  getPopularMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Array<Movie>>(`${BASE_URL}${POPULAR}${API_KEY}`)
      .pipe(map((data: any) => data['results'].slice(0, 6)));
  }


  getInTheatreMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Array<Movie>>(
        `${BASE_URL}${IN_THEATRE}${API_KEY}&with_release_type=2|3`
      )
      .pipe(map((data: any) => data['results'].slice(0, 6)));
  }

  getNowPlayingMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Array<Movie>>(`${BASE_URL}${NOW_PLAYING}${API_KEY}`)
      .pipe(map((data: any) => data['results'].slice(0, 6)));
  }

  getTopRatedMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Array<Movie>>(`${BASE_URL}${TOP_RATED}${API_KEY}`)
      .pipe(map((data: any) => data['results'].slice(0, 6)));
  }

  getMovieByID(id:string){
    return this.http.get<MovieDetails>(`${BASE_URL}movie/${id}${API_KEY}`)
  }
}
