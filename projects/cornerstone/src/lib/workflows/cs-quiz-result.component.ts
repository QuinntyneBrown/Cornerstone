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
import { CsQuizResultAction } from './cs-quiz-result-action.interface';
import { CsQuizResultView } from './cs-quiz-result-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-quiz-result',
  imports: [CsProgressRingComponent, CsBadgeComponent, CsButtonDirective],
  templateUrl: './cs-quiz-result.component.html',
  styleUrl: './cs-quiz-result.component.scss',
})
export class CsQuizResultComponent {
  readonly result = input.required<CsQuizResultView>();
  readonly action = output<CsQuizResultAction>();
}
