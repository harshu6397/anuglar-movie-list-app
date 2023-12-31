import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { SingleMovieCard } from '../../interfaces/moviecard';

@Component({
  selector: 'app-movie-deatils',
  standalone: true,
  imports: [],
  templateUrl: './movie-deatils.component.html',
  styleUrl: './movie-deatils.component.css'
})
export class MovieDeatilsComponent {
  movieService: MoviesService = inject(MoviesService);
  route: ActivatedRoute = inject(ActivatedRoute);
  movieId = -1;
  singleMovieCard !: SingleMovieCard | undefined;
  constructor() {
    this.movieId = parseInt(this.route.snapshot.params['id'], 10);
    this.movieService.getMovieCard(this.movieId).then((singleMovieCard) => {
      this.singleMovieCard = singleMovieCard;
    }
    );
  }  

}
