import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesUrl = 'http://localhost:3000/movies';
  omdbUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=c8de31d1';
  lengthOfMovieList: number = 0;

  constructor(
    private http: HttpClient
  ) { }

  async getAllMovies(): Promise<Movies[]> {
    const data = await fetch(this.moviesUrl);
    return (await data.json()) ?? [];
  }

  getOMDBData(): Observable<Movies> {
    return this.http.get<Movies>(this.omdbUrl);
  }

  async getMovieById(id: number): Promise<Movies | undefined> {
    const data = await fetch(`${this.moviesUrl}/${id}`);
    return (await data.json()) ?? {};
  }

  async addMovie(body: Movies): Promise<Movies | undefined> {
    const data = await fetch(this.moviesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    return (await data.json()) ?? {};
  }

  async updateMovieById(id: number, body: Movies): Promise<Movies | undefined> {
    const data = await fetch(`${this.moviesUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    return (await data.json()) ?? {};
  }

  async deleteMovieById(id: number, body: Movies): Promise<Movies | undefined> {
    const data = await fetch(`${this.moviesUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    return (await data.json()) ?? {};
  }
}
