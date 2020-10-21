import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-group-icon',
  templateUrl: 'group-24px.svg',
  styleUrls: ['./group-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupIconComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
