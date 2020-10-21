import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './movie.component';
import { MovieResolverService } from './resolvers/movie-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
    resolve: {movie: MovieResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
