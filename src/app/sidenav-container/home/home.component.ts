import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle(`${environment.appName}`)
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
}
