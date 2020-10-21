import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchLaterRoutingModule } from './watch-later-routing.module';
import { WatchLaterComponent } from './watch-later.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [WatchLaterComponent],
  imports: [
    CommonModule,
    WatchLaterRoutingModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class WatchLaterModule {
}
