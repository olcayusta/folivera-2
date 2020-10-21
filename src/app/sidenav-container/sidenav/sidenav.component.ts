import {Component, ChangeDetectionStrategy, NgModule} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {IconsModule} from '@shared/icons/icons.module';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {SidenavService} from '@shared/services/sidenav.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {

  constructor(
    private dialog: MatDialog,
    private sidenavService: SidenavService
  ) {
  }

  closeSidenav(): void {
    this.sidenavService.toggle();
  }

  async openFeedbackDialog() {
    const {FeedbackDialogComponent} = await import('../../dialogs/feedback-dialog/feedback-dialog.component');
    this.dialog.open(FeedbackDialogComponent, {
      autoFocus: false,
      width: '768px'
    });
  }

  async openSettingsDialog() {
    const {SettingsDialogComponent} = await import('../../dialogs/settings-dialog/settings-dialog.component');
    this.dialog.open(SettingsDialogComponent, {
      autoFocus: false
    });
  }
}

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    IconsModule,
    RouterModule,
    MatIconModule
  ]
})
class SidenavModule {
}
