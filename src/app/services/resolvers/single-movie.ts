import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { MovieDetails } from "../../models/MovieDetails";
import { MovieService } from "../movie.service";


@Injectable(
    {
    providedIn: 'root',
  }
)
export class SingleMovieResolver implements Resolve<MovieDetails>{

constructor(private movieService:MovieService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       const id=route.params['id'];
       console.log(id);
       

       return this.movieService.getMovieByID(id);
    }
}