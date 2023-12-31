import { Injectable } from '@angular/core';
import { Moviecard, SingleMovieCard } from '../interfaces/moviecard';
import { APIKEY } from '../../environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3/movie/';
  constructor() { }

  async getMovieCardList(): Promise<Moviecard[]> {
    return fetch(this.baseUrl + 'popular?api_key=' + APIKEY + '&language=en-US&page=1')
      .then(response => response.json())
      .then(data => data.results);
  }

  async getMovieCard(id: number): Promise<SingleMovieCard> {
    return fetch(this.baseUrl + id + '?api_key=' + APIKEY + '&language=en-US')
      .then(response => response.json())
      .then(data => data);
  }
}
