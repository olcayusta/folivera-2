import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { Movie } from "@shared/models/movie";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMockMovies(): Observable<Movie[]> {
    const x = [
      {
        trailerUrl: null,
        creationTime: "2020-08-21T19:17:25.134Z",
        description: null,
        directorId: null,
        id: 25,
        originalTitle: "American Pie Presents: Girls Rules",
        posterUrl:
          "https://image.tmdb.org/t/p/original/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
        runtime: null,
        title: null,
        viewCount: null,
        year: "2020",
        nowPlayingCount: 44,
      },
      {
        trailerUrl: null,
        creationTime: "2020-08-21T19:17:25.134Z",
        description: null,
        directorId: null,
        id: 25,
        originalTitle: "American Pie Presents: Girls Rules",
        posterUrl:
          "https://image.tmdb.org/t/p/original/z0r3YjyJSLqf6Hz0rbBAnEhNXQ7.jpg",
        runtime: null,
        title: null,
        viewCount: null,
        year: "2020",
        nowPlayingCount: 33,
      },
      {
        trailerUrl: null,
        creationTime: "2020-08-21T19:17:25.134Z",
        description: null,
        directorId: null,
        id: 25,
        originalTitle: "American Pie Presents: Girls Rules",
        posterUrl:
          "https://image.tmdb.org/t/p/original/nZ9yAPRgc36vb31SSHOjtlnfn9e.jpg",
        runtime: null,
        title: null,
        viewCount: null,
        year: "2020",
        nowPlayingCount: 22,
      },
    ];
    return of(x);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/movies`);
  }

  getMovie(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}/movies/${movieId}`);
  }

  getContinueWatchingMovies(userId: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `${environment.apiUrl}/users/${userId}/continue-watching`
    );
  }
}
