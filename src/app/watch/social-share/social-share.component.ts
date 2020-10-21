import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialShareComponent implements OnInit {
  levels: any;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<SocialShareComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.levels = this.data.levels;
  }

  changeResolution(index: number) {
    this.data.hls.currentLevel = index;
    this.bottomSheetRef.dismiss();
  }

  makeLevelAuto() {
    this.data.hls.currentLevel = -1;
    this.bottomSheetRef.dismiss();
  }
}
