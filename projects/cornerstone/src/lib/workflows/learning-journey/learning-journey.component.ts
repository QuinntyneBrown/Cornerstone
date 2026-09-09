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
import { JourneyLayout } from './journey-layout.type';
import { LearningJourneyView } from './learning-journey-view.interface';
import { LessonStepListComponent } from '../lesson-step-list/lesson-step-list.component';
import { LessonStepSelect } from '../lesson-step-list/lesson-step-select.interface';
import { ModuleToggle } from './module-toggle.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-learning-journey',
  imports: [LessonStepListComponent, ProgressBarComponent],
  templateUrl: './learning-journey.component.html',
  styleUrl: './learning-journey.component.scss',
})
export class LearningJourneyComponent {
  readonly view = input.required<LearningJourneyView>();
  readonly layout = input<JourneyLayout>('auto');
  readonly stepSelected = output<LessonStepSelect>();
  readonly moduleToggled = output<ModuleToggle>();
}
