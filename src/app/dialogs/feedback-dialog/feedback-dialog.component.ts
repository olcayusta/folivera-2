import {
  Component,
  ChangeDetectionStrategy,
  NgModule
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackDialogComponent {

  constructor(
    private feedbackService: FeedbackService
  ) {
  }

  submit(value: string) {
    this.feedbackService.save(value).subscribe();
  }
}

@NgModule({
  declarations: [FeedbackDialogComponent],
  imports: [
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
class FeedbackDialogModule {
}
