import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MoviesComponent } from '../components/movies/movies.component';
import { FormsModule, NgForm } from '@angular/forms';

import { MovieComponent } from '../components/movie/movie.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HighlightDirective } from '../highlight.directive';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HighlightDirective, RouterModule, NgFor, NgIf, MoviesComponent, FormsModule, MovieComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  @ViewChild('f')
   searchForm!: NgForm;
   isNeedSearch: boolean = true;
   isLoginSelected: boolean = false;
   path:any;


  constructor(private router: Router, private route:ActivatedRoute ) { }


  
  toggleForm() {
this.path=this.router
console.log( this.path);

    return this.isLoginSelected 
  }
  
  
  
  search() {
    let query = this.searchForm.value.query;
    this.path=this.route.snapshot
   
    

    this.router.navigate(['/movies/search'], { queryParams: { search:query} })
   
  }
}


