import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "@shared/models/movie";
import { MovieService } from "@shared/services/movie.service";

@Component({
  selector: "app-currently-playing-movies",
  templateUrl: "./currently-playing-movies.component.html",
  styleUrls: ["./currently-playing-movies.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentlyPlayingMoviesComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies$ = this.movieService.getMockMovies();
  }
}
