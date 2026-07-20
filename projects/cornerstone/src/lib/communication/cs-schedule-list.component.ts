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
import { CsEventCardComponent } from './cs-event-card.component';
import { CsScheduleGroup } from './cs-schedule-group.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-schedule-list',
  imports: [CsEventCardComponent],
  templateUrl: './cs-schedule-list.component.html',
  styleUrl: './cs-schedule-list.component.scss',
})
export class CsScheduleListComponent {
  readonly groups = input.required<readonly CsScheduleGroup[]>();
  readonly activated = output<string>();
}
