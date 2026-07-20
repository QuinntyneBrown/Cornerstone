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
import { CsMessageViewModel } from './cs-message-view-model.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-message-thread',
  imports: [CsAvatarComponent],
  templateUrl: './cs-message-thread.component.html',
  styleUrl: './cs-message-thread.component.scss',
})
export class CsMessageThreadComponent {
  readonly messages = input.required<readonly CsMessageViewModel[]>();
  readonly state = input<CsDataState>({ status: 'ready', data: undefined });
  readonly loadEarlier = output<void>();
}
