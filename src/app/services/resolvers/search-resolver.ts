import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Params, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { MovieDetails } from "../../models/MovieDetails";
import { MovieService } from "../movie.service";
import Movie from "../../models/Movie";
import { Observable } from "rxjs";


@Injectable(
  {
    providedIn: 'root',
  }
)
export class SearchResolver implements Resolve<Movie[]> {
 
  constructor(private movieService: MovieService, private router: Router) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Movie[]>{
  //  return route.queryParams.pipe(
  //   switchMap(params => {
  //     const query = params['search'];
  //     if (query) {
  //       return this.movieService.searchMovie(query);
  //     } }))






    const query=route.queryParams['search'];
    // debugger
    console.log(query);
    

    return this.movieService.searchMovie(query);
  }
}