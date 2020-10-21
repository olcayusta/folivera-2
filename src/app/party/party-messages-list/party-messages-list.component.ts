import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty } from '@angular/core';
import { SocketService } from '@shared/services/socket.service';

@Component({
  selector: 'app-party-messages-list',
  templateUrl: './party-messages-list.component.html',
  styleUrls: ['./party-messages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyMessagesListComponent implements OnInit {
  messages = [];

  constructor(
    private socketService: SocketService
  ) {
  }

  ngOnInit(): void {
    this.socketService.subject.subscribe((value: any) => {
      const bgColor = `hsl(${Math.random() * 360}, ${Math.random() * 100}%, ${Math.random() * 100}%)`;
      const char = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      this.messages.push({
        bgColor,
        char,
        msg: value.text
      });
      markDirty(this);
    });
  }
}
