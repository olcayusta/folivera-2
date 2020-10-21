import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Movie } from '@shared/models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/movies`);
  }

  getMovie(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}/movies/${movieId}`);
  }

  getContinueWatchingMovies(userId: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/users/${userId}/continue-watching`);
  }
}
