import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './sidenav-container/home/home.component';
import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { TopBarComponent } from './sidenav-container/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BlockScrollStrategy, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { SharedModule } from '@shared/shared.module';
import { MatRippleModule } from '@angular/material/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { ContinueWatchingComponent } from './sidenav-container/home/continue-watching/continue-watching.component';
import { IconsModule } from '@shared/icons/icons.module';
import { MostWatchingComponent } from './sidenav-container/home/most-watching/most-watching.component';
import { MAT_MENU_SCROLL_STRATEGY, MatMenuModule } from '@angular/material/menu';
import { TopbarLogoRendererComponent } from './sidenav-container/top-bar/topbar-logo-renderer/topbar-logo-renderer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {
  BottomSheetOverviewExampleSheet,
  MostWatchingItemComponent,
} from './sidenav-container/home/most-watching/most-watching-item/most-watching-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContinueWatchingItemComponent } from './sidenav-container/home/continue-watching/continue-watching-item/continue-watching-item.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ChipListGenreComponent } from './sidenav-container/home/chip-list-genre/chip-list-genre.component';
import { SettingsBottomSheetComponent } from './settings-bottom-sheet/settings-bottom-sheet.component';
import { TopBarUserComponent } from './sidenav-container/top-bar/top-bar-user/top-bar-user.component';
import { MatInputModule } from '@angular/material/input';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { SearchFormComponent } from './sidenav-container/top-bar/search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BigSliderComponent } from './big-slider/big-slider.component';
import { CurrentlyPlayingMoviesComponent } from './currently-playing-movies/currently-playing-movies.component';

export function scrolLFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavContainerComponent,
    TopBarComponent,
    ContinueWatchingComponent,
    MostWatchingComponent,
    TopbarLogoRendererComponent,
    MostWatchingItemComponent,
    ContinueWatchingItemComponent,
    BottomSheetOverviewExampleSheet,
    ChipListGenreComponent,
    SettingsBottomSheetComponent,
    TopBarUserComponent,
    ResetPasswordComponent,
    SearchFormComponent,
    BigSliderComponent,
    CurrentlyPlayingMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    OverlayModule,
    SharedModule,
    MatRippleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatChipsModule,
    MatMenuModule,
    IconsModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatListModule,
    MatBottomSheetModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { horizontalPosition: 'center' } },
    { provide: MAT_MENU_SCROLL_STRATEGY, useFactory: scrolLFactory, deps: [Overlay] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
