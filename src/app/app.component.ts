import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ɵmarkDirty as markDirty,
} from "@angular/core";
import {
  NavigationCancel,
  NavigationError,
  ResolveEnd,
  ResolveStart,
  Router,
} from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  spinner;

  constructor(private router: Router, private title: Title) {}

  ngOnDestroy() {
    console.log("Destroy!");
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof ResolveStart) {
        this.spinner = true;
        markDirty(this);
      }

      if (event instanceof ResolveEnd) {
        this.spinner = false;
        markDirty(this);
      }

      if (event instanceof (NavigationError || NavigationCancel)) {
        this.spinner = false;
        markDirty(this);
      }
    });
  }
}
