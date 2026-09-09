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
import { AttendanceBulkChange } from './attendance-bulk-change.interface';
import { AttendanceChange } from './attendance-change.interface';
import { AttendanceChoiceComponent } from '../attendance-choice/attendance-choice.component';
import { AttendanceConflictIntent } from './attendance-conflict-intent.interface';
import { AttendanceNoteChange } from './attendance-note-change.interface';
import { AttendanceRosterViewModel } from './attendance-roster-view-model.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-attendance-roster',
  imports: [PersonComponent, AttendanceChoiceComponent, CsTextareaDirective],
  templateUrl: './attendance-roster.component.html',
  styleUrl: './attendance-roster.component.scss',
})
export class AttendanceRosterComponent {
  readonly view = input.required<AttendanceRosterViewModel>();
  readonly changed = output<AttendanceChange>();
  readonly bulkChanged = output<AttendanceBulkChange>();
  readonly noteChanged = output<AttendanceNoteChange>();
  readonly conflict = output<AttendanceConflictIntent>();
}
