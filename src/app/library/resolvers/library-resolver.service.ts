import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { Movie } from '@shared/models/movie';
import { Observable, EMPTY } from 'rxjs';
import { LibraryService } from '../services/library.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibraryResolverService implements Resolve<Movie[]> {

  constructor(
    private libraryService: LibraryService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> | Promise<Movie[]> | Movie[] {
    return this.libraryService.getFavoriteMovies().pipe(
      catchError(err => {
        this.router.navigateByUrl('/')
        return EMPTY;
      })
    )
  }

}
