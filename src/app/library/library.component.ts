import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '@shared/models/movie';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryComponent implements OnInit {
  movies: Movie[];

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.title.setTitle(`Kitaplık - ${environment.appName}`);
  }

  ngOnInit(): void {
    this.movies = this.route.snapshot.data.movies;
  }

  onLoaded($event: Event) {
    console.log('image loaded!');
  }
}
