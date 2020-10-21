import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '@shared/models/movie';
import { MovieService } from '@shared/services/movie.service';

@Component({
  selector: 'app-most-watching',
  templateUrl: './most-watching.component.html',
  styleUrls: ['./most-watching.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MostWatchingComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();
  }
}
