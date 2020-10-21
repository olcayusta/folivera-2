import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-filter-list-icon',
  templateUrl: 'filter_list-24px.svg',
  styleUrls: ['./filter-list-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterListIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
