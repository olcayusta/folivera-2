import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ɵmarkDirty as markDirty } from '@angular/core';
import { Movie } from '@shared/models/movie';
import { LibraryService } from '../../services/library.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-library-watch-later',
  templateUrl: './library-watch-later.component.html',
  styleUrls: ['./library-watch-later.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryWatchLaterComponent implements OnInit, AfterViewInit {
  movies$: Observable<Movie[]>;

  constructor(
    private libraryService: LibraryService
  ) {
  }

  ngAfterViewInit() {
  /*  let video = document.querySelector('#grid');
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(true);

          observer.disconnect();
          markDirty(this);
        } else {
          console.log(false);
        }
      });
    }, {threshold: 1});
    console.log(video);
    observer.observe(video);*/
  }

  ngOnInit(): void {
    this.movies$ = this.libraryService.getWatchLaterMovies();
  }

}
