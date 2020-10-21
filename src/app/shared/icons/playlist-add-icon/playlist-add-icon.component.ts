import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-playlist-add-icon',
  templateUrl: 'playlist_add-24px.svg',
  styleUrls: ['./playlist-add-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistAddIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
