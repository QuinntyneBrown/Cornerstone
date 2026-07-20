import { ClipboardModule } from '@angular/cdk/clipboard';
import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Pipe,
  PipeTransform,
  booleanAttribute,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import {
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressBarComponent,
} from '../foundations';
import {
  CsChoiceGroupComponent,
  CsDateTimeFieldComponent,
  CsFieldComponent,
  CsInputDirective,
  CsSearchFieldComponent,
  CsTextareaDirective,
} from '../forms';
import { CsDataState, csSafeUrl } from '../platform';
import { CsNotificationItemComponent } from './cs-notification-item.component';
import { CsNotificationNavigateIntent } from './cs-notification-navigate-intent.interface';
import { CsNotificationViewModel } from './cs-notification-view-model.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-notification-list',
  imports: [CsNotificationItemComponent, CsButtonDirective],
  templateUrl: './cs-notification-list.component.html',
  styleUrl: './cs-notification-list.component.scss',
})
export class CsNotificationListComponent {
  readonly notifications = input.required<readonly CsNotificationViewModel[]>();
  readonly state = input<CsDataState>({ status: 'ready', data: undefined });
  readonly unreadCount = input(0);
  readonly markRead = output<string>();
  readonly markAllRead = output<void>();
  readonly navigate = output<CsNotificationNavigateIntent>();
}
