import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Movie } from '@shared/models/movie';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { LibraryService } from '../../../../library/services/library.service';

@Component({
  selector: 'app-most-watching-item',
  templateUrl: './most-watching-item.component.html',
  styleUrls: ['./most-watching-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MostWatchingItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private libraryService: LibraryService
  ) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet, {
      autoFocus: false,
      // panelClass: 'my-class',
      closeOnNavigation: true,
    });
  }

  ngOnInit(): void {}

  addToLibrary(movieId: number): void {
    this.libraryService.addToLibrary(movieId).subscribe((value) => {
      this.snackBar.open('Kitaplığa eklendi', 'GERİ AL', {
        duration: 3000,
      });
    });
  }
}

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
