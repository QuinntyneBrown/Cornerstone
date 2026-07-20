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
import { CsAssessmentChange } from './cs-assessment-change.interface';
import { CsAssessmentDecision } from './cs-assessment-decision.interface';
import { CsAssessmentView } from './cs-assessment-view.interface';
import { CsRubricComponent } from './cs-rubric.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-assessment-editor',
  imports: [CsRubricComponent, CsTextareaDirective, CsButtonDirective],
  templateUrl: './cs-assessment-editor.component.html',
  styleUrl: './cs-assessment-editor.component.scss',
})
export class CsAssessmentEditorComponent {
  readonly assessment = input.required<CsAssessmentView>();
  readonly changed = output<CsAssessmentChange>();
  readonly decided = output<CsAssessmentDecision>();
}
