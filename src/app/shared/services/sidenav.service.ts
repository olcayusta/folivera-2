import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  sidenavToggle = new Subject<boolean>();

  private sidenav: MatSidenav;

  constructor() {
  }

  public setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  public toggle(): void {
    this.sidenav.toggle();
  }

  open(): void {
    this.sidenavToggle.next(true);
  }

  close(): void {
    this.sidenavToggle.next(false);
  }
}
