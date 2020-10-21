import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LibraryWatchLaterComponent } from './components/library-watch-later/library-watch-later.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LibraryIWatchedComponent } from './components/library-i-watched/library-i-watched.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LibraryComponent, LibraryWatchLaterComponent, LibraryIWatchedComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    SharedModule
  ]
})
export class LibraryModule {
}
