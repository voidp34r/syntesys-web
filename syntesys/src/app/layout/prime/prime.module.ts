import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TerminalModule} from 'primeng/terminal';
import {TerminalService} from 'primeng/components/terminal/terminalservice';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
// import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    TerminalModule,
    MessagesModule,
    MessageModule,
    GrowlModule
  ],
  exports: [
    TerminalModule,
    MessagesModule,
    MessageModule,
    GrowlModule
  ],
  declarations: [],
  providers: [
    TerminalService,
    MessageService
  ]
})
export class PrimeModule { }
