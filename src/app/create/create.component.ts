import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../models/movies.model';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  movieForm = new FormGroup({
    movieTitle: new FormControl(''),
    genre: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private movieService: MoviesService
  ) {}

  submitMovie(): void {
    console.log(this.movieForm);
    const request: Movies = {
      id: 11,
      name: this.movieForm.value.movieTitle!,
      genre: this.movieForm.value.genre!,
      longDesc: this.movieForm.value.description!
    }
    this.movieService.addMovie(request).then((movie) => {
      console.log(movie);
    });
  }

}
