import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchRoutingModule } from './watch-routing.module';
import { WatchComponent } from './watch.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '@shared/shared.module';
import { MatRippleModule } from '@angular/material/core';
import { SocialShareComponent } from './social-share/social-share.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { IconsModule } from '@shared/icons/icons.module';

@NgModule({
  declarations: [
    WatchComponent,
    SocialShareComponent
  ],
  imports: [
    CommonModule,
    WatchRoutingModule,
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatProgressBarModule,
    SharedModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatListModule,
    IconsModule
  ],
  exports: [
    WatchComponent
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ]
})
export class WatchModule {
}
