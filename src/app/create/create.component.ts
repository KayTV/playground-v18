import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../models/movies.model';
import { BackButtonComponent } from '../common/back-button/back-button.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BackButtonComponent, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  movieSearch: string = '';
  movieFromSearch: any = undefined;
  movieAdded: boolean = false;

  movieForm = new FormGroup({
    movieTitle: new FormControl(''),
    genre: new FormControl(''),
    description: new FormControl(''),
    director: new FormControl(''),
    movieImage: new FormControl('')
  });

  constructor(
    private movieService: MoviesService
  ) {}

  searchForMovie(movie: string): void {
    this.movieAdded = false;
    if (movie.length > 0) {
      this.movieService.getOMDBMovieByName(movie).subscribe({
        next: (movie) => {
          this.movieFromSearch = movie;
          this.movieForm.setValue({
            movieTitle: movie.Title,
            genre: movie.Genre,
            description: movie.Plot,
            director: movie.Director,
            movieImage: movie.Poster
          })
        },
        error: (error) => {console.log(error)}
      });
    } else {
      delete this.movieFromSearch;
      this.movieForm.reset();
    }
  }

  submitMovie(): void {
    console.log(this.movieForm);
    const request: Movies = {
      name: this.movieForm.value.movieTitle!,
      genre: this.movieForm.value.genre!,
      image: this.movieForm.value.movieImage!,
      longDesc: this.movieForm.value.description!
    }
    this.movieService.addMovie(request).then((movie) => {
      console.log(movie);
      this.movieAdded = true;
      delete this.movieFromSearch;
      this.movieForm.reset();
    });
  }

}
