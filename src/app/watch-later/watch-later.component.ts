import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LibraryService } from '../library/services/library.service';
import { Movie } from '@shared/models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchLaterComponent implements OnInit {
  movies: Movie[];

  constructor(private libraryService: LibraryService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movies = this.route.snapshot.data.movies;
  }
}
