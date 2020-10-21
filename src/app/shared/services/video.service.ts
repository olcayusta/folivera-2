import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  currentTime = new Subject<number>();
  duration = new Subject<number>();
  isMutedSource = new Subject<boolean>();
  isMuted = this.isMutedSource.asObservable();

  replaySubject = new Subject();
  replay$ = this.replaySubject.asObservable();

  forwardSubject = new Subject();
  forward$ = this.forwardSubject.asObservable();

  seekTime = new Subject<number>();
  seekTime$ = this.seekTime.asObservable();

  paused = new Subject();
  paused$ = this.paused.asObservable();

  volume = new Subject<any>();
  volume$ = this.volume.asObservable();

  changeTrack = new Subject();
  changeTrack$ = this.changeTrack.asObservable();

  levels = new Subject();
  levels$ = this.levels.asObservable();

  audioTracks = new Subject();
  subtitles = new Subject();

  pip = new Subject();
  pip$ = this.pip.asObservable();

  constructor() {
  }

  setCurrentTime(currentTime: number): void {
    this.currentTime.next(currentTime);
  }

  setDuration(duration: number): void {
    this.duration.next(duration);
  }

  updateCurrentTime(time: number) {
    this.seekTime.next(time);
  }

  updateVolume(volume) {
    this.volume.next(volume);
  }

  pause() {
    this.paused.next();
  }

  mute() {
    this.isMutedSource.next(true);
  }

  unmute() {
    this.isMutedSource.next(false);
  }

  replay() {
    this.replaySubject.next();
  }

  forward() {
    this.forwardSubject.next();
  }

  changeResolution(): void {

  }

  changeAudioTrack(index: number): void {
    this.changeTrack.next(index);
  }

  setAudioTracks(tracks): void {
    this.audioTracks.next(tracks);
  }

  setLevels(levels): void {
    this.levels.next(levels);
  }

  setSubtitles(subtitles): void {
    this.subtitles.next(subtitles);
  }

  pipRequest() {
    this.pip.next(true);
  }

/*  getAudioTracks(): void {
    return this.audioTracks;
  }*/
}
