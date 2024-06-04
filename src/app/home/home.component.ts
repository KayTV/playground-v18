import { Component, OnInit } from '@angular/core';
import { CreateComponent } from '../create/create.component';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../models/movies.model';
import { CommonModule } from '@angular/common';
import { MovieDisplayComponent } from '../movie-display/movie-display.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreateComponent, FormsModule, CommonModule, MovieDisplayComponent, RouterModule],
  providers: [MoviesService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  name: string = '';
  movieList: Movies[] = [];
  genreDropdown: string[] = [];

  constructor(
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.getMovies();
    this.getOmdbMovie();
  }

  getMovies(): void {
    this.movieService.getAllMovies().then((movies) => {
      if (movies.length > 0) {
        this.movieList = movies;
        this.movieService.lengthOfMovieList = movies.length;
        this.getGenreDropdown();
      }
    });
  }

  getOmdbMovie(): void {
    this.movieService.getOMDBData().subscribe((value) => {
      console.log(value);
    });
  }

  getGenreDropdown(): void {
    this.genreDropdown = [];
    this.movieList.forEach((movie) => {
      movie.genre?.toLowerCase();
      const repeatMovie = this.genreDropdown.find(genre => genre === movie.genre);
      if (repeatMovie === undefined && movie.genre !== undefined) {
        this.genreDropdown.push(movie.genre!);
      }
    });
    console.log(this.genreDropdown);
  }

}
