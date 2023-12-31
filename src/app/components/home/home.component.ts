import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Moviecard } from '../../interfaces/moviecard';
import { MoviesService } from '../../services/movies.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './home.component.html', 
  styleUrl: './home.component.css'
})

export class HomeComponent {
  movieCardList: Moviecard[] = []
  movieService: MoviesService = inject(MoviesService);
  constructor() {
    this.movieService.getMovieCardList().then((movieCards) => {
      this.movieCardList = movieCards;
    });
  }
}
