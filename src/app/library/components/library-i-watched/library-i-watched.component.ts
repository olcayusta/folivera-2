import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { Observable } from 'rxjs';
import { Movie } from '@shared/models/movie';

@Component({
  selector: 'app-library-i-watched',
  templateUrl: './library-i-watched.component.html',
  styleUrls: ['./library-i-watched.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryIWatchedComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(
    private libraryService: LibraryService
  ) { }

  ngOnInit(): void {
    this.movies$ = this.libraryService.getIWatchedMovies();
  }

}
