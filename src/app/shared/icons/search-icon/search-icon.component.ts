import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-search-icon',
  templateUrl: 'search-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
