import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Type,
  ɵmarkDirty as markDirty,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '@shared/services/sidenav.service';
import { SheetComponent } from './sheet/sheet.component';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavContainerComponent implements OnInit, AfterViewInit {
  sidenavComponent: Type<SidenavComponent>;
  sheetComponent: Type<SheetComponent>;
  bottomBarComponent: Type<BottomBarComponent>;

  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('sheet') sheet: MatSidenav;

  sheetMode: MatDrawerMode = 'side';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidenavService: SidenavService
  ) {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  async ngOnInit(): Promise<void> {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

    if (isSmallScreen) {
      this.sheetMode = 'over';
      const {BottomBarComponent} = await import('./bottom-bar/bottom-bar.component');
      this.bottomBarComponent = BottomBarComponent;
      markDirty(this);
    }
  }

  async sidenavToggle(): Promise<void> {
    const {SidenavComponent} = await import('./sidenav/sidenav.component');
    this.sidenavComponent = SidenavComponent;
    markDirty(this);
  }

  async sheetToggle(): Promise<void> {
    const {SheetComponent} = await import('./sheet/sheet.component');
    this.sheetComponent = SheetComponent;
    markDirty(this);
  }

  sidenavOpenedStart(): void {
    document.body.style.overflow = 'hidden';
  }

  sidenavClosedStart(): void {
    document.body.style.overflow = '';
  }

  hideOverflow(): void {
    // document.body.style.overflow = 'hidden';
  }

  showOverflow(): void {
    // document.body.style.overflow = '';
  }
}
