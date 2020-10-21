import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ɵdetectChanges as detectChanges,
  AfterViewInit, NgModule
} from '@angular/core';
import { MatSliderChange, MatSliderModule } from '@angular/material/slider';
import { VideoService } from '@shared/services/video.service';
import { Observable, Subscription } from 'rxjs';
import { SharedModule } from '@shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { IconsModule } from '@shared/icons/icons.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-desktop-player',
  templateUrl: './desktop-player.component.html',
  styleUrls: ['./desktop-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopPlayerComponent implements OnInit, AfterViewInit {
  currentTime$: Observable<number>;
  @Input() duration;
  @Input() subtitles;
  // @Input() audioTracks;
  @Input() levels;

  @Output() playpauseEmit = new EventEmitter();

  isPaused = true;
  isFullscreen = false;

  isMuted$;

  audioTracks$;
  levels$;
  subtitles$;

  subscription: Subscription;

  isPipEnabled = true;

  constructor(
    private videoService: VideoService
  ) {
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    this.isPipEnabled = document.pictureInPictureEnabled;
  }

  ngOnInit(): void {
    this.currentTime$ = this.videoService.currentTime;
    this.duration = this.videoService.duration;
    this.isMuted$ = this.videoService.isMuted;
    this.audioTracks$ = this.videoService.audioTracks;
    this.levels$ = this.videoService.levels;
    this.subtitles$ = this.videoService.subtitles;
  }

  seekSliderChange($event: MatSliderChange): void {
    this.videoService.updateCurrentTime($event.value);
  }

  playpause(): void {
    /*if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }*/
    this.videoService.pause();
    this.isPaused = !this.isPaused;
  }

  replay(): void {
    this.videoService.replay();
  }

  forward(): void {
    this.videoService.forward();
  }

  mute(): void {
    // this.video.muted = !this.video.muted;
    // this.updatePlayerVolumeInfo();
  }

  volumeSliderChange($event: MatSliderChange): void {
    // this.video.volume = $event.value / 100;
    // this.updatePlayerVolumeInfo();
    this.videoService.updateVolume($event.value / 100);

  }

  changeSubtitle(index: number): void {
    // this.hls.subtitleTrack = index;
  }

  changeAudioTrack(index: number): void {
    this.videoService.changeAudioTrack(index);
  }

  changeResolution(index: number): void {
    // this.hls.currentLevel = index;
  }

  async changeFullscreen(): Promise<void> {
    const el = document.getElementById('playerContent');
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await el.requestFullscreen();
    }

    el.onfullscreenchange = (ev) => {
      this.isFullscreen = !!document.fullscreenElement;
      detectChanges(this);
    };

    /* this.videoEl.nativeElement.style.height = '100vh';
     this.videoEl.nativeElement.style.width = '100vw';*/

  }

  // experimental
  // Picture in picture
  pipButtonClicked(): void {
    this.videoService.pipRequest();
  }
}

@NgModule({
  declarations: [DesktopPlayerComponent],
  imports: [
    SharedModule,
    MatMenuModule,
    IconsModule,
    MatSliderModule,
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule
  ]
})
class DesktopPlayerModule {
}
