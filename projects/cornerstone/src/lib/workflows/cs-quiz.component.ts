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
import { CsQuizAnswerChange } from './cs-quiz-answer-change.interface';
import { CsQuizMode } from './cs-quiz-mode.type';
import { CsQuizNavigate } from './cs-quiz-navigate.interface';
import { CsQuizQuestionComponent } from './cs-quiz-question.component';
import { CsQuizSubmit } from './cs-quiz-submit.interface';
import { CsQuizView } from './cs-quiz-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-quiz',
  imports: [CsQuizQuestionComponent, CsButtonDirective, CsProgressBarComponent],
  templateUrl: './cs-quiz.component.html',
  styleUrl: './cs-quiz.component.scss',
})
export class CsQuizComponent {
  readonly view = input.required<CsQuizView>();
  readonly mode = input<CsQuizMode>('take');
  readonly active = computed(() => this.view().questions[this.view().activeIndex]);
  readonly answerChanged = output<CsQuizAnswerChange>();
  readonly navigate = output<CsQuizNavigate>();
  readonly submitted = output<CsQuizSubmit>();
}
