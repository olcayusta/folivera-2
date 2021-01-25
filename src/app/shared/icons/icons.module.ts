import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PauseIconComponent } from "./pause-icon/pause-icon.component";
import { PlayArrowIconComponent } from "./play-arrow-icon/play-arrow-icon.component";
import { ReplayIconComponent } from "./replay-icon/replay-icon.component";
import { ForwardIconComponent } from "./forward-icon/forward-icon.component";
import { FullscreenIconComponent } from "./fullscreen-icon/fullscreen-icon.component";
import { FulscreenExitIconComponent } from "./fulscreen-exit-icon/fulscreen-exit-icon.component";
import { SearchIconComponent } from "./search-icon/search-icon.component";
import { ClosedCaptionIconComponent } from "./closed-caption-icon/closed-caption-icon.component";
import { LanguageIconComponent } from "./language-icon/language-icon.component";
import { VolumeUpIconComponent } from "./volume-up-icon/volume-up-icon.component";
import { VolumeOffIconComponent } from "./volume-off-icon/volume-off-icon.component";
import { VisibilityOffIconComponent } from "./visibility-off-icon/visibility-off-icon.component";
import { VisibilityIconComponent } from "./visibility-icon/visibility-icon.component";
import { AudioTrackIconComponent } from "./audio-track-icon/audio-track-icon.component";
import { MoreVertIconComponent } from "./more-vert-icon/more-vert-icon.component";
import { KeyboardArrowRightIconComponent } from "./keyboard-arrow-right-icon/keyboard-arrow-right-icon.component";
import { KeyboardArrowLeftIconComponent } from "./keyboard-arrow-left-icon/keyboard-arrow-left-icon.component";
import { FilterListIconComponent } from "./filter-list-icon/filter-list-icon.component";
import { ChevronRightIconComponent } from "./chevron-right-icon/chevron-right-icon.component";
import { WatchLaterIconComponent } from "./watch-later-icon/watch-later-icon.component";
import { PictureInPictureAltIconComponent } from "./picture-in-picture-alt-icon/picture-in-picture-alt-icon.component";
import { NotInterestedIconComponent } from "./not-interested-icon/not-interested-icon.component";
import { PlaylistAddIconComponent } from "./playlist-add-icon/playlist-add-icon.component";
import { DeleteIconComponent } from "./delete-icon/delete-icon.component";

@NgModule({
  declarations: [
    PauseIconComponent,
    PlayArrowIconComponent,
    ReplayIconComponent,
    ForwardIconComponent,
    FullscreenIconComponent,
    FulscreenExitIconComponent,
    SearchIconComponent,
    ClosedCaptionIconComponent,
    LanguageIconComponent,
    VolumeUpIconComponent,
    VolumeOffIconComponent,
    VisibilityOffIconComponent,
    VisibilityIconComponent,
    AudioTrackIconComponent,
    MoreVertIconComponent,
    KeyboardArrowRightIconComponent,
    KeyboardArrowLeftIconComponent,
    FilterListIconComponent,
    ChevronRightIconComponent,
    WatchLaterIconComponent,
    PictureInPictureAltIconComponent,
    NotInterestedIconComponent,
    PlaylistAddIconComponent,
    DeleteIconComponent,
  ],
  exports: [
    PlayArrowIconComponent,
    PauseIconComponent,
    ReplayIconComponent,
    ForwardIconComponent,
    SearchIconComponent,
    ClosedCaptionIconComponent,
    VolumeOffIconComponent,
    VolumeUpIconComponent,
    VisibilityOffIconComponent,
    VisibilityIconComponent,
    FullscreenIconComponent,
    FulscreenExitIconComponent,
    AudioTrackIconComponent,
    MoreVertIconComponent,
    KeyboardArrowRightIconComponent,
    FilterListIconComponent,
    ChevronRightIconComponent,
    WatchLaterIconComponent,
    PictureInPictureAltIconComponent,
    NotInterestedIconComponent,
    PlaylistAddIconComponent,
    DeleteIconComponent,
  ],
  imports: [CommonModule],
})
export class IconsModule {}
