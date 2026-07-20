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
import { CsQuizAnswerValue } from './cs-quiz-answer-value.type';
import { CsQuizQuestionView } from './cs-quiz-question-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-quiz-question',
  imports: [CsChoiceGroupComponent, CsChoiceCardComponent, CsTextareaDirective],
  templateUrl: './cs-quiz-question.component.html',
  styleUrl: './cs-quiz-question.component.scss',
})
export class CsQuizQuestionComponent {
  readonly question = input.required<CsQuizQuestionView>();
  readonly value = input<CsQuizAnswerValue>('');
  readonly answerChanged = output<CsQuizAnswerChange>();
  protected selected(id: string): boolean {
    return Array.isArray(this.value()) ? this.value().includes(id) : this.value() === id;
  }
  protected choose(id: string, on: boolean): void {
    if (this.question().type === 'multiple') {
      const current = Array.isArray(this.value()) ? [...this.value()] : [];
      this.change(on ? [...current, id] : current.filter((value) => value !== id));
    } else this.change(id);
  }
  protected change(value: CsQuizAnswerValue): void {
    this.answerChanged.emit({ questionId: this.question().id, value });
  }
}
