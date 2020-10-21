import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Movie } from '@shared/models/movie';
import { EMPTY, Observable } from 'rxjs';
import { MovieService } from '@shared/services/movie.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<Movie> {

  constructor(
    private router: Router,
    private movieService: MovieService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> | Promise<Movie> | Movie {
    return this.movieService.getMovie(+route.paramMap.get('movieId')).pipe(
      catchError(err => {
        this.router.navigateByUrl('/');
        return EMPTY;
      })
    );
  }
}
