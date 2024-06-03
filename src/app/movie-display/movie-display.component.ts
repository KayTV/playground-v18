import { Component, Input } from '@angular/core';
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
