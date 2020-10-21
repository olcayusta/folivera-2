import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@shared/models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  private userSubject: BehaviorSubject<User>;
  user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('USER')));
    this.user = this.userSubject.asObservable();

    const logged = !!JSON.parse(localStorage.getItem('USER'));
    this.isLoggedInSubject.next(logged);
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${environment.apiUrl}/users/login`, {
        email,
        password,
      })
      .pipe(
        tap(async (user) => {
          localStorage.setItem('USER', JSON.stringify(user));
          this.isLoggedInSubject.next(true);
          this.userSubject.next(user);
          // await this.router.navigateByUrl('/');
          return user;
        })
      );
  }

  logout(): void {
    localStorage.clear();
    this.userSubject.next(null);
    this.isLoggedInSubject.next(false);
    // window.location.reload();
    // this.router.navigateByUrl('/login');
  }
}
