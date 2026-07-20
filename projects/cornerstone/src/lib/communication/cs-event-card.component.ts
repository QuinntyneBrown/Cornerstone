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
import { CsEventViewModel } from './cs-event-view-model.interface';
import { CsRsvpIntent } from './cs-rsvp-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-event-card',
  imports: [CsCardComponent, CsBadgeComponent],
  templateUrl: './cs-event-card.component.html',
  styleUrl: './cs-event-card.component.scss',
})
export class CsEventCardComponent {
  readonly event = input.required<CsEventViewModel>();
  readonly activated = output<string>();
  readonly rsvp = output<CsRsvpIntent>();
}
