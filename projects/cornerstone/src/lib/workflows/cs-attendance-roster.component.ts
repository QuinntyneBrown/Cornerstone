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
import { CsAttendanceBulkChange } from './cs-attendance-bulk-change.interface';
import { CsAttendanceChange } from './cs-attendance-change.interface';
import { CsAttendanceChoiceComponent } from './cs-attendance-choice.component';
import { CsAttendanceConflictIntent } from './cs-attendance-conflict-intent.interface';
import { CsAttendanceNoteChange } from './cs-attendance-note-change.interface';
import { CsAttendanceRosterViewModel } from './cs-attendance-roster-view-model.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-attendance-roster',
  imports: [CsPersonComponent, CsAttendanceChoiceComponent, CsTextareaDirective],
  templateUrl: './cs-attendance-roster.component.html',
  styleUrl: './cs-attendance-roster.component.scss',
})
export class CsAttendanceRosterComponent {
  readonly view = input.required<CsAttendanceRosterViewModel>();
  readonly changed = output<CsAttendanceChange>();
  readonly bulkChanged = output<CsAttendanceBulkChange>();
  readonly noteChanged = output<CsAttendanceNoteChange>();
  readonly conflict = output<CsAttendanceConflictIntent>();
}
