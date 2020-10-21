import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-currently-playing-movies',
  templateUrl: './currently-playing-movies.component.html',
  styleUrls: ['./currently-playing-movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentlyPlayingMoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
