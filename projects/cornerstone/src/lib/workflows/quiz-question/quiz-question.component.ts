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
import { QuizAnswerChange } from '../quiz/quiz-answer-change.interface';
import { QuizAnswerValue } from '../quiz/quiz-answer-value.type';
import { QuizQuestionView } from './quiz-question-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-quiz-question',
  imports: [ChoiceGroupComponent, ChoiceCardComponent, CsTextareaDirective],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.scss',
})
export class QuizQuestionComponent {
  readonly question = input.required<QuizQuestionView>();
  readonly value = input<QuizAnswerValue>('');
  readonly answerChanged = output<QuizAnswerChange>();
  protected selected(id: string): boolean {
    return Array.isArray(this.value()) ? this.value().includes(id) : this.value() === id;
  }
  protected choose(id: string, on: boolean): void {
    if (this.question().type === 'multiple') {
      const current = Array.isArray(this.value()) ? [...this.value()] : [];
      this.change(on ? [...current, id] : current.filter((value) => value !== id));
    } else this.change(id);
  }
  protected change(value: QuizAnswerValue): void {
    this.answerChanged.emit({ questionId: this.question().id, value });
  }
}
