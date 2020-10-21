import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty, Type } from '@angular/core';
import { User } from '@shared/models/user';
import { AuthService } from '../../../auth/services/auth.service';
import { SettingsBottomSheetComponent } from '../../../settings-bottom-sheet/settings-bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AvatarPopupComponent } from '../avatar-popup/avatar-popup.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-top-bar-user',
  templateUrl: './top-bar-user.component.html',
  styleUrls: ['./top-bar-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarUserComponent implements OnInit {
  isSmallScreen;

  user: User;

  avatarPopupOpened: boolean;
  avatarPopupComponent: Type<AvatarPopupComponent>;

  blockScrollStrategy;

  constructor(
    private authService: AuthService,
    private bottomSheet: MatBottomSheet,
    private sso: ScrollStrategyOptions,
    private breakpointObserver: BreakpointObserver
  ) {
    this.blockScrollStrategy = this.sso.block();
    this.user = this.authService.userValue;
  }

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  }

  async openAvatarPopup(): Promise<void> {
    const { AvatarPopupComponent } = await import('../avatar-popup/avatar-popup.component');
    this.avatarPopupComponent = AvatarPopupComponent;
    this.avatarPopupOpened = !this.avatarPopupOpened;
    markDirty(this);
  }

  closePopup(): void {
    this.avatarPopupOpened = false;
    markDirty(this);
  }

  displaySheet() {
    const sheet = this.bottomSheet.open(SettingsBottomSheetComponent, {});
  }
}
