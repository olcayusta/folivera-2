import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '@shared/models/comment.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  getMovieComments(movieId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiUrl}/movies/${movieId}/comments`);
  }
}
