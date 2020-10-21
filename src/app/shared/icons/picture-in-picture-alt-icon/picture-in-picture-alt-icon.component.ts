import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-picture-in-picture-alt-icon',
  templateUrl: 'picture_in_picture_alt-24px.svg',
  styleUrls: ['./picture-in-picture-alt-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureInPictureAltIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
