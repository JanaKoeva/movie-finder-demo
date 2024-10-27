import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { MovieDetails } from "../../models/MovieDetails";
import { MovieService } from "../movie.service";
import Movie from "../../models/Movie";
import { Observable, forkJoin, map, zip } from "rxjs";


@Injectable( {providedIn: 'root'})
export class MovieListResolver implements Resolve<Movie[]>{

constructor(private movieService:MovieService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
       
       return zip(
        this.movieService.getInTheatreMovies(),
        this.movieService.getNowPlayingMovies(),
        this.movieService.getPopularMovies(),
        this.movieService.getTopRatedMovies(),

       )
       .pipe(
        map(([inTheatreMovies, nowPlayingMovies, popularMovies, topRatedMovies])=>{
                      
            return[
                ...inTheatreMovies, ...nowPlayingMovies, ...popularMovies, ...topRatedMovies
            ]
        })
       );
    }
}