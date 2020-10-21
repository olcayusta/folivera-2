import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  templateUrl: 'delete-24px.svg',
  styleUrls: ['./delete-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteIconComponent {
  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
