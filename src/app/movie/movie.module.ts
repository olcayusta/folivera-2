import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MatButtonModule } from '@angular/material/button';
import { WatchModule } from '../watch/watch.module';


@NgModule({
  declarations: [MovieComponent],
    imports: [
        CommonModule,
        MovieRoutingModule,
        MatButtonModule,
        WatchModule
    ]
})
export class MovieModule {
}
