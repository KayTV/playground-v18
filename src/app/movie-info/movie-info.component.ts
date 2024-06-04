import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackButtonComponent } from '../common/back-button/back-button.component';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../models/movies.model';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [BackButtonComponent, FormsModule],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss'
})
export class MovieInfoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieId = -1;
  movie: Movies | undefined;
  movieUpdateForm = new FormGroup({
    movieTitle: new FormControl(''),
    genre: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private movieService: MoviesService
  ) {
      this.movieId = Number(this.route.snapshot.params['id']);
      this.movieService.getMovieById(this.movieId).then((getMovie) => {
        if (getMovie) {
          this.movie = getMovie;
        }
        this.movie = getMovie;
      });
  }

}
