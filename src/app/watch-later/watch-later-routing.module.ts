import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatchLaterComponent } from './watch-later.component';
import { WatchLaterResolverService } from './resolvers/watch-later-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: WatchLaterComponent,
    resolve: {movies: WatchLaterResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchLaterRoutingModule {
}
