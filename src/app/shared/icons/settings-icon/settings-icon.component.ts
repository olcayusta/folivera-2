import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-settings-icon',
  templateUrl: 'settings-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
