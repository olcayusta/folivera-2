import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty } from '@angular/core';
import { SocketService } from '@shared/services/socket.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-party-nav',
  templateUrl: './party-nav.component.html',
  styleUrls: ['./party-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyNavComponent implements OnInit {
  msgForm: FormControl = new FormControl();

  constructor(
    private socketService: SocketService
  ) {
  }

  ngOnInit(): void {
  }

  send(): void {
    this.socketService.send(this.msgForm.value);
    this.msgForm.patchValue('');
  }

  onScroll($event): void {
    console.log($event);
  }
}
