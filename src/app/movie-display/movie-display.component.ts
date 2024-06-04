import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movies } from '../models/movies.model';
import { RouterModule } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-display',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './movie-display.component.html',
  styleUrl: './movie-display.component.scss'
})
export class MovieDisplayComponent {
  @Input() movie: Movies | undefined;
  @Output() movieDeleted = new EventEmitter<Movies>();

  constructor(
    private movieService: MoviesService
  ) {}

  deleteMovie(movie: Movies): void {
    this.movieService.deleteMovieById(movie.id!, movie).then((deleted) => {
      console.log(deleted);
      window.location.reload();
    });
  }

}
