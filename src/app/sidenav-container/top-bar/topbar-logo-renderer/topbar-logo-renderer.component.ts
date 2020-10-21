import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-topbar-logo-renderer',
  templateUrl: './topbar-logo-renderer.component.html',
  styleUrls: ['./topbar-logo-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarLogoRendererComponent {}
