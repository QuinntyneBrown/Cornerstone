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
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressBarComponent,
  CsProgressRingComponent,
} from '../foundations';
import {
  CsCheckboxComponent,
  CsChoiceCardComponent,
  CsChoiceGroupComponent,
  CsFieldComponent,
  CsInputDirective,
  CsSearchFieldComponent,
  CsTextareaDirective,
} from '../forms';
import { CsDataState, CsIntent, CsViewModel } from '../platform';
import {
  CsPersonComponent,
  CsPersonSummary,
  CsProgressMatrixComponent,
  CsStatCardComponent,
  CsTableContainerComponent,
  CsTableDirective,
  CsTimelineComponent,
  CsTimelineEntry,
} from '../data-display';
import { CsAttendanceState } from './cs-attendance-state.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-attendance-choice',
  templateUrl: './cs-attendance-choice.component.html',
  styleUrl: './cs-attendance-choice.component.scss',
})
export class CsAttendanceChoiceComponent {
  readonly value = input<CsAttendanceState>('unknown');
  readonly changed = output<CsAttendanceState>();
  readonly states: readonly CsAttendanceState[] = ['present', 'absent', 'late', 'excused'];
}
