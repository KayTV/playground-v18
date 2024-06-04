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
  array = [1, 2, 3, 4, 5, 6, 7];
  name: string = '';
  movieList: Movies[] = [];

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
      }
    });
  }

  getOmdbMovie(): void {
    this.movieService.getOMDBData().subscribe((value) => {
      console.log(value);
    });
  }

}
