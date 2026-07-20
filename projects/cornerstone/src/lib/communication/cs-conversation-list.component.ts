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
import { CsConversationItem } from './cs-conversation-item.interface';
import { CsConversationItemComponent } from './cs-conversation-item.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-conversation-list',
  imports: [CsConversationItemComponent],
  templateUrl: './cs-conversation-list.component.html',
  styleUrl: './cs-conversation-list.component.scss',
})
export class CsConversationListComponent {
  readonly conversations = input.required<readonly CsConversationItem[]>();
  readonly activated = output<string>();
}
