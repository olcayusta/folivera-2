import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-language-icon',
  templateUrl: 'language-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
