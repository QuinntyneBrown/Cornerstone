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
import { CsNotificationNavigateIntent } from './cs-notification-navigate-intent.interface';
import { CsNotificationViewModel } from './cs-notification-view-model.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-notification-item',
  templateUrl: './cs-notification-item.component.html',
  styleUrl: './cs-notification-item.component.scss',
})
export class CsNotificationItemComponent {
  readonly notification = input.required<CsNotificationViewModel>();
  readonly readToggled = output<string>();
  readonly activated = output<CsNotificationNavigateIntent>();
}
