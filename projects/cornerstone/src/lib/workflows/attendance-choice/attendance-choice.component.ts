import {
  ChangeDetectionStrategy,
  Component,
  Directive,
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
  ProgressRingComponent,
} from '../../foundations';
import {
  CheckboxComponent,
  ChoiceCardComponent,
  ChoiceGroupComponent,
  FieldComponent,
  CsInputDirective,
  SearchFieldComponent,
  CsTextareaDirective,
} from '../../forms';
import { CsDataState, CsIntent, CsViewModel } from '../../platform';
import {
  PersonComponent,
  PersonSummary,
  ProgressMatrixComponent,
  StatCardComponent,
  TableContainerComponent,
  TableDirective,
  TimelineComponent,
  TimelineEntry,
} from '../../data-display';
import { CsAttendanceState } from '../cs-attendance-state.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-attendance-choice',
  templateUrl: './attendance-choice.component.html',
  styleUrl: './attendance-choice.component.scss',
})
export class AttendanceChoiceComponent {
  readonly value = input<CsAttendanceState>('unknown');
  readonly changed = output<CsAttendanceState>();
  readonly states: readonly CsAttendanceState[] = ['present', 'absent', 'late', 'excused'];
}
