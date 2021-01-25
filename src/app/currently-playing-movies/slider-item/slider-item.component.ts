import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Movie } from "src/app/shared/models/movie";

@Component({
  selector: "app-slider-item",
  templateUrl: "./slider-item.component.html",
  styleUrls: ["./slider-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {}
}
