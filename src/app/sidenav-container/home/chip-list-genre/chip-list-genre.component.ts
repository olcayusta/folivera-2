import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GenreService } from '@shared/services/genre.service';
import { Genre } from '@shared/models/genre.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chip-list-genre',
  templateUrl: './chip-list-genre.component.html',
  styleUrls: ['./chip-list-genre.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipListGenreComponent implements OnInit {
  genres$: Observable<Genre[]>;

  constructor(
    private genreService: GenreService
  ) { }

  ngOnInit(): void {
    this.genres$ = this.genreService.getAllGenres();
  }

}
