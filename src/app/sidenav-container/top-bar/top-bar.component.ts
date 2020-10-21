import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '@shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
  @Output()
  openSidenav = new EventEmitter();

  @Output()
  openSheet = new EventEmitter();

  isLoggedIn$: Observable<boolean>;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
}
