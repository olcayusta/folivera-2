import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@shared/models/user';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  register(email: string, password: string, displayName: string, avatarUrl: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, {
      email, password, displayName, avatarUrl
    });
  }
}
