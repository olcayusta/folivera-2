import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ɵdetectChanges as detectChanges,
  OnDestroy,
} from "@angular/core";
import Hls from "hls.js";
import { VideoService } from "@shared/services/video.service";
import { Subscription } from "rxjs";
import { environment } from "@environments/environment.prod";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("videoElement")
  videoEl: ElementRef<HTMLVideoElement>;

  hls: Hls;
  video: HTMLVideoElement;

  subscription: Subscription;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.hls = new Hls();
  }

  ngAfterViewInit(): void {
    this.video = this.videoEl?.nativeElement;
    // this.hls.loadSource('https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8');
    this.hls.loadSource(`${environment.apiUrl}/public/movie7/h264_master.m3u8`);
    // this.hls.loadSource('https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8');

    this.hls.attachMedia(this.video);

    this.hls.on(
      Hls.Events.MANIFEST_LOADED,
      (
        event: any,
        data: { [x: string]: any; audioTracks: any; levels: any }
      ) => {
        this.videoService.setAudioTracks(data.audioTracks);
        this.videoService.setLevels(data.levels);
        this.videoService.setSubtitles(data["subtitles"]);
        console.log(data.audioTracks);
        // this.isAvailableSubtitle = this.hls.subtitleTracks.length > 0;
      }
    );

    this.hls.on(Hls.Events.MANIFEST_PARSED, (data) => {
      console.log(this.hls.levels);
      this.videoService.setLevels(this.hls.levels);

      /*     const promise = this.video.play();
                             detectChanges(this);
                             if (promise !== undefined) {
                               promise.then(_ => {
                                 // this.video.play();
                               }).catch(error => {
                                 console.log(error);
                                 alert(error);
                               });
                             }*/

      this.initMediaSessionApi();
    });

    this.videoService.paused.subscribe((value) => {
      if (this.video.paused) {
        this.video.play();
      } else {
        this.video.pause();
      }
    });

    this.subscription = this.videoService.changeTrack$.subscribe((value) => {
      // @ts-ignore
      this.hls.audioTracks[this.hls.audioTrack].selected = false;

      // @ts-ignore
      this.hls.audioTrack = value;

      // @ts-ignore
      this.hls.audioTracks[value].selected = true;
      console.log("Ses degisti!");
    });

    this.videoService.seekTime$.subscribe((value) => {
      this.video.currentTime = value;
    });

    this.video.ontimeupdate = () => {
      this.videoService.setCurrentTime(Math.floor(this.video.currentTime));
      // detectChanges(this);

      /* this.progress = Math.floor(this.video.currentTime * 100) / this.video.duration;
                         detectChanges(this);*/
    };

    this.video.onloadeddata = (ev) => {
      this.videoService.setDuration(this.video.duration);
    };

    this.videoService.volume$.subscribe((value) => {
      console.log(this.video.volume);
      this.video.volume = value;
      this.updatePlayerVolumeInfo();
    });

    this.videoService.forward$.subscribe((value) => {
      this.forward();
    });

    this.videoService.replay$.subscribe((value) => {
      this.replay();
    });

    this.videoService.pip$.subscribe((value) => {
      // @ts-ignore
      this.video.requestPictureInPicture().catch((error) => {
        // Video failed to enter Picture-in-Picture mode.
        console.log(error);
      });
    });
  }

  initMediaSessionApi(): void {
    if ("mediaSession" in navigator) {
      // @ts-ignore
      navigator.mediaSession.metadata = new MediaMetadata({
        title: "Stargirl",
        artist: "",
        album: "",
        artwork: [
          {
            src:
              "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ykeaF3Ldz1Kf6sfnOJJH4dW56F4.jpg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      });

      // @ts-ignore
      navigator.mediaSession.setActionHandler("play", () => {
        this.video.play();
      });
      // @ts-ignore
      navigator.mediaSession.setActionHandler("pause", () => {
        this.video.pause();
      });
      // @ts-ignore
      navigator.mediaSession.setActionHandler("seekbackward", () => {
        this.video.currentTime -= 10;
      });
      // @ts-ignore
      navigator.mediaSession.setActionHandler("seekforward", () => {
        this.video.currentTime += 10;
      });
      /*  // @ts-ignore
                          navigator.mediaSession.setActionHandler('previoustrack', () => { /!* Code excerpted. *!/ });
                          // @ts-ignore
                          navigator.mediaSession.setActionHandler('nexttrack', () => { /!* Code excerpted. *!/ });*/
    }
  }

  updatePlayerVolumeInfo(): void {
    localStorage.setItem(
      "PLAYER_VOLUME",
      JSON.stringify({ volume: this.video.volume, muted: this.video.muted })
    );
  }

  ngOnDestroy(): void {
    console.log(this.subscription);
    this.subscription.unsubscribe();
    console.log(this.subscription);
    this.hls.destroy();
  }

  forward(): void {
    this.video.currentTime += 10;
  }

  replay(): void {
    this.video.currentTime -= 10;
  }

  changeResolution(index: number): void {
    alert(index);
    this.hls.currentLevel = index;
  }
}
