import {ChangeDetectionStrategy, Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {IconsModule} from '@shared/icons/icons.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [SettingsDialogComponent],
  imports: [
    MatButtonModule,
    IconsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatListModule
  ]
})
class SettingsDialogModule {
}
