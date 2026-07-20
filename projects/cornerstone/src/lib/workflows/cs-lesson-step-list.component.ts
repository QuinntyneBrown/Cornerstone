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
import { CsLessonStepSelect } from './cs-lesson-step-select.interface';
import { CsLessonStepView } from './cs-lesson-step-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-lesson-step-list',
  imports: [CsBadgeComponent],
  templateUrl: './cs-lesson-step-list.component.html',
  styleUrl: './cs-lesson-step-list.component.scss',
})
export class CsLessonStepListComponent {
  readonly steps = input.required<readonly CsLessonStepView[]>();
  readonly selected = output<CsLessonStepSelect>();
}
