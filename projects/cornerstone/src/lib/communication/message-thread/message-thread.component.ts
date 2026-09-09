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
import { MessageViewModel } from './message-view-model.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-message-thread',
  imports: [AvatarComponent],
  templateUrl: './message-thread.component.html',
  styleUrl: './message-thread.component.scss',
})
export class MessageThreadComponent {
  readonly messages = input.required<readonly MessageViewModel[]>();
  readonly state = input<CsDataState>({ status: 'ready', data: undefined });
  readonly loadEarlier = output<void>();
}
