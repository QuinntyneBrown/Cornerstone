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
import { CsJourneyLayout } from './cs-journey-layout.type';
import { CsLearningJourneyView } from './cs-learning-journey-view.interface';
import { CsLessonStepListComponent } from './cs-lesson-step-list.component';
import { CsLessonStepSelect } from './cs-lesson-step-select.interface';
import { CsModuleToggle } from './cs-module-toggle.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-learning-journey',
  imports: [CsLessonStepListComponent, CsProgressBarComponent],
  templateUrl: './cs-learning-journey.component.html',
  styleUrl: './cs-learning-journey.component.scss',
})
export class CsLearningJourneyComponent {
  readonly view = input.required<CsLearningJourneyView>();
  readonly layout = input<CsJourneyLayout>('auto');
  readonly stepSelected = output<CsLessonStepSelect>();
  readonly moduleToggled = output<CsModuleToggle>();
}
