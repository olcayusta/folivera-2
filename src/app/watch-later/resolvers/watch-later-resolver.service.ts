import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Movie } from '@shared/models/movie';
import { WatchLaterService } from '../services/watch-later.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchLaterResolverService implements Resolve<Movie[]> {

  constructor(
    private watchLaterService: WatchLaterService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> | Promise<Movie[]> | Movie[] {
    return this.watchLaterService.getWLMovies();
  }
}
