import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { MatSliderChange, MatSliderModule } from '@angular/material/slider';
import { VideoService } from '@shared/services/video.service';
import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { IconsModule } from '@shared/icons/icons.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SocialShareComponent } from '../social-share/social-share.component';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-mobile-player',
  templateUrl: './mobile-player.component.html',
  styleUrls: ['./mobile-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobilePlayerComponent implements OnInit {
  @Input() isFullscreenEnabled = false;

  currentTime;
  duration;

  paused;

  isFullScreen;

  constructor(
    private videoService: VideoService,
    private bottomSheet: MatBottomSheet
  ) {
  }

  ngOnInit(): void {
    this.currentTime = this.videoService.currentTime;
    this.duration = this.videoService.duration;

    this.videoService.paused$.subscribe(value => {
      this.paused = value;
    });
  }

  seekSliderChange($event: MatSliderChange): void {
    this.videoService.updateCurrentTime($event.value);
  }

  playpause(): void {
    this.videoService.pause();
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(SocialShareComponent, {
      ariaLabel: 'Share on social media',
      /*      data: {
              hls: this.hls,
              levels: this.hls.levels
            },*/
      data: {},
      autoFocus: false,
      restoreFocus: false
    });
  }

  changeFullScreen(): void {
    const el = document.getElementById('playerContent');
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen) {
      el.requestFullscreen({
        navigationUI: 'hide'
      });

      /*this.breakpointObserver.observe([
        Breakpoints.Handset
      ]).subscribe(result => {
        if (result.matches) {
          screen.orientation.lock('landscape').then(value => {
            console.log('Landscape moduna gecildi.');
          }).catch(reason => {
            console.log(reason);
          });
        }
      });*/
    } else {
      document.exitFullscreen();
    }
  }
}

@NgModule({
  declarations: [MobilePlayerComponent],
  imports: [
    SharedModule,
    MatButtonModule,
    MatRippleModule,
    MatSliderModule,
    MatBottomSheetModule,
    MatIconModule,
    IconsModule,
    CommonModule
  ]
})
class MobilePlayerModule {

}
