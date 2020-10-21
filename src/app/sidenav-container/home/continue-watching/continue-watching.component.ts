import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '@shared/models/movie';
import { MovieService } from '@shared/services/movie.service';

@Component({
  selector: 'app-continue-watching',
  templateUrl: './continue-watching.component.html',
  styleUrls: ['./continue-watching.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContinueWatchingComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.movies$ = this.movieService.getContinueWatchingMovies(1);
  }
}
