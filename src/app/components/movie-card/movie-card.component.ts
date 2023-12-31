import { Component, Input } from '@angular/core';
import { Moviecard } from '../../interfaces/moviecard';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {  
  @Input() movieCard!: Moviecard;
}
