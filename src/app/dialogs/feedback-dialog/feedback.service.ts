import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Feedback } from './feedback.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private http: HttpClient
  ) { }

  save(text: string): Observable<Feedback> {
    return this.http.post<Feedback>(`${environment.apiUrl}/feedbacks`, {
      userId: 1,
      text: text
    })
  }
}
