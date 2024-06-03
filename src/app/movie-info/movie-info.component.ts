import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackButtonComponent } from '../common/back-button/back-button.component';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../models/movies.model';

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [BackButtonComponent],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss'
})
export class MovieInfoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieId = -1;
  movie: Movies | undefined;

  constructor(
    private movieService: MoviesService
  ) {
      this.movieId = Number(this.route.snapshot.params['id']);
      this.movieService.getMovieById(this.movieId).then((getMovie) => {
        this.movie = getMovie;
      });
  }

}
