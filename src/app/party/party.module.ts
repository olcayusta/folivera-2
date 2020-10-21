import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { PartyComponent } from './party.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { WatchModule } from '../watch/watch.module';
import { PartyNavComponent } from './party-nav/party-nav.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PartyMessagesListComponent } from './party-messages-list/party-messages-list.component';


@NgModule({
  declarations: [PartyComponent, PartyNavComponent, PartyMessagesListComponent],
  imports: [
    CommonModule,
    PartyRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    WatchModule,
    MatTooltipModule
  ]
})
export class PartyModule {
}
