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
import { QuizAnswerChange } from './quiz-answer-change.interface';
import { QuizMode } from './quiz-mode.type';
import { QuizNavigate } from './quiz-navigate.interface';
import { QuizQuestionComponent } from '../quiz-question/quiz-question.component';
import { QuizSubmit } from './quiz-submit.interface';
import { QuizView } from './quiz-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-quiz',
  imports: [QuizQuestionComponent, CsButtonDirective, ProgressBarComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  readonly view = input.required<QuizView>();
  readonly mode = input<QuizMode>('take');
  readonly active = computed(() => this.view().questions[this.view().activeIndex]);
  readonly answerChanged = output<QuizAnswerChange>();
  readonly navigate = output<QuizNavigate>();
  readonly submitted = output<QuizSubmit>();
}
