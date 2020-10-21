import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Type,
  ViewChild,
  ɵdetectChanges as detectChanges,
  ɵmarkDirty as markDirty
} from '@angular/core';
import Hls from 'hls.js';
import { MatSliderChange } from '@angular/material/slider';
import { BreakpointObserver } from '@angular/cdk/layout';
import { VideoService } from '@shared/services/video.service';
import { MobilePlayerComponent } from './mobile-player/mobile-player.component';
import { DesktopPlayerComponent } from './desktop-player/desktop-player.component';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchComponent implements AfterViewInit {
  @ViewChild('videoElement')
  videoEl: ElementRef<HTMLVideoElement>;

  hls: Hls = new Hls();
  video: HTMLVideoElement;

  progress;

  isFullscreenEnabled = false;

  subtitles: any;

  subtitleTest;

  duration;

  isAvailableSubtitle: boolean;

  playerComponent: Type<DesktopPlayerComponent> | Type<MobilePlayerComponent>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private videoService: VideoService
  ) {
  }

  async ngAfterViewInit(): Promise<void> {
    await this.loadPlayer();

    /*this.video.onloadeddata = ev => {
      this.duration = Math.floor(this.video.duration);
      this.videoService.setDuration(this.video.duration);
      const track = this.video.textTracks[0];

      if (this.video.textTracks.length > 0) {
        track.oncuechange = () => {
          const cues = track.activeCues; // array of current cues
          const cue = track.activeCues[0];

          if (cue) {
            this.subtitleTest = cue.text;
            detectChanges(this);

            cue.onexit = ev1 => {
              this.subtitleTest = '';
              detectChanges(this);
            };
          }
        };
      }
    };*/
  }

  async loadPlayer(): Promise<void> {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

    if (isSmallScreen) {
      await this.loadMobilePlayer();
    } else {
      await this.loadDesktopPlayer();
    }
    markDirty(this);
  }

  async loadMobilePlayer(): Promise<void> {
    const {MobilePlayerComponent} = await import('./mobile-player/mobile-player.component');
    this.playerComponent = MobilePlayerComponent;
  }

  async loadDesktopPlayer(): Promise<void> {
    const {DesktopPlayerComponent} = await import('./desktop-player/desktop-player.component');
    this.playerComponent = DesktopPlayerComponent;
  }

  changeResolution(index: number): void {
    this.hls.currentLevel = index;
  }

  makeLevelAuto(): void {
    this.hls.currentLevel = -1;
  }

  changeSubtitle(index: number): void {
    console.log(this.subtitles);
    this.hls.subtitleTrack = index;
  }

  changeAudioTrack(index: number): void {
    // @ts-ignore
    this.hls.audioTrack = index;
  }

  playpause(): void {
    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  mute(): void {
    this.video.muted = !this.video.muted;
    this.updatePlayerVolumeInfo();
  }

  updatePlayerVolumeInfo(): void {
    localStorage.setItem('PLAYER_VOLUME', JSON.stringify({volume: this.video.volume, muted: this.video.muted}));
  }

  seekSliderChange($event: MatSliderChange): void {
    this.video.currentTime = $event.value;
  }
}
