import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '@shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(
    private http: HttpClient
  ) {
  }

  getFavoriteMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/users/1/favorites`);
  }

  getIWatchedMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/me/watched`);
  }

  getWatchLaterMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/me/watchlater`);
  }

  addToLibrary(movieId: number): Observable<Movie> {
    return this.http.post<Movie>(`${environment.apiUrl}/users/favorites`, {
      movieId
    });
  }
}
