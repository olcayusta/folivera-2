import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Movie } from '@shared/models/movie';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-continue-watching-item',
  templateUrl: './continue-watching-item.component.html',
  styleUrls: ['./continue-watching-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContinueWatchingItemComponent {
  @Input() movie: Movie;
  progress;

  constructor(
    private snackBar: MatSnackBar
  ) {
    this.progress = Math.floor(Math.random() * 101);
  }

  deleteToLibrary(): void {
    const snackbar = this.snackBar.open('Listeden kaldırıldı', 'GERİ AL', {
      duration: 3000
    });

    snackbar.onAction().subscribe(value => {
      console.log('Geri alindi...');
    });
  }
}
