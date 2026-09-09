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
  AvatarComponent,
  BadgeComponent,
  CsButtonDirective,
  CardComponent,
  ProgressBarComponent,
} from '../../foundations';
import {
  ChoiceGroupComponent,
  DateTimeFieldComponent,
  FieldComponent,
  CsInputDirective,
  SearchFieldComponent,
  CsTextareaDirective,
} from '../../forms';
import { CsDataState, csSafeUrl } from '../../platform';
import { NotificationItemComponent } from '../notification-item/notification-item.component';
import { CsNotificationNavigateIntent } from '../cs-notification-navigate-intent.interface';
import { CsNotificationViewModel } from '../cs-notification-view-model.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-notification-list',
  imports: [NotificationItemComponent, CsButtonDirective],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.scss',
})
export class NotificationListComponent {
  readonly notifications = input.required<readonly CsNotificationViewModel[]>();
  readonly state = input<CsDataState>({ status: 'ready', data: undefined });
  readonly unreadCount = input(0);
  readonly markRead = output<string>();
  readonly markAllRead = output<void>();
  readonly navigate = output<CsNotificationNavigateIntent>();
}
