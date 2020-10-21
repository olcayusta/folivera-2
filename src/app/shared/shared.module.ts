import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImgDirective } from './directives/lazy-load-img.directive';
import { CurrentTimePipe } from './pipes/current-time.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { VideoComponent } from '@shared/video/video.component';
import { LazyLoadSliderDirective } from './directives/lazy-load-slider.directive';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { StickyDirective } from './directives/sticky.directive';


@NgModule({
  declarations: [
    LazyLoadImgDirective,
    CurrentTimePipe,
    DurationPipe,
    VideoComponent,
    LazyLoadSliderDirective,
    MovieListComponent,
    StickyDirective
  ],
  exports: [
    LazyLoadImgDirective,
    CurrentTimePipe,
    DurationPipe,
    VideoComponent,
    LazyLoadSliderDirective,
    StickyDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
