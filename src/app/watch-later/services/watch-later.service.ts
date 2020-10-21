import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Movie } from '@shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class WatchLaterService {
  apiUrl = `${environment.apiUrl}/me/watchlater`;

  constructor(
    private http: HttpClient
  ) {
  }

  getWLMovies() {
    return this.http.get<Movie[]>(this.apiUrl);
  }
}
