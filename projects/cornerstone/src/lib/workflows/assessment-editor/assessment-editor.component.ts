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
import { AssessmentChange } from './assessment-change.interface';
import { AssessmentDecision } from './assessment-decision.interface';
import { AssessmentView } from './assessment-view.interface';
import { RubricComponent } from '../rubric/rubric.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-assessment-editor',
  imports: [RubricComponent, CsTextareaDirective, CsButtonDirective],
  templateUrl: './assessment-editor.component.html',
  styleUrl: './assessment-editor.component.scss',
})
export class AssessmentEditorComponent {
  readonly assessment = input.required<AssessmentView>();
  readonly changed = output<AssessmentChange>();
  readonly decided = output<AssessmentDecision>();
}
