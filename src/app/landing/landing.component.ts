import { Component } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
