import { Component, Input } from '@angular/core';
import { Movies } from '../models/movies.model';

@Component({
  selector: 'app-movie-display',
  standalone: true,
  imports: [],
  templateUrl: './movie-display.component.html',
  styleUrl: './movie-display.component.scss'
})
export class MovieDisplayComponent {
  @Input() movie: Movies | undefined;

}
