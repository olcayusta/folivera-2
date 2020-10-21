import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Genre } from '@shared/models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(
    private http: HttpClient
  ) { }

  getAllGenres() {
    return this.http.get<Genre[]>(`${environment.apiUrl}/genres`)
  }
}
