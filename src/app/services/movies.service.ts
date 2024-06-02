import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesUrl = 'http://localhost:3000/movies';

  constructor() { }

  async getAllMovies(): Promise<Movies[]> {
    const data = await fetch(this.moviesUrl);
    return (await data.json()) ?? [];
  }

  async getMovieById(id: number): Promise<Movies | undefined> {
    const data = await fetch(`${this.moviesUrl}/${id}`);
    return (await data.json()) ?? {};
  }
}
