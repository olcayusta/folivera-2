import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@shared/models/movie';
import { Title } from '@angular/platform-browser';
import { CommentService } from '@shared/services/comment.service';
import { Observable } from 'rxjs';
import { Comment } from '@shared/models/comment.model';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {
  movie: Movie;
  comments$: Observable<Comment[]>;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private commentService: CommentService
  ) {
  }

  ngOnInit(): void {
    this.movie = this.route.snapshot.data.movie;
    this.title.setTitle(`${this.movie.title} - ${environment.appName}`);
  }

  showComments() {
    this.comments$ = this.commentService.getMovieComments(this.movie.id);
  }
}
