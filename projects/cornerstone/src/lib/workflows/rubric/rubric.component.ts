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
import { RubricLevelSelect } from './rubric-level-select.interface';
import { RubricView } from './rubric-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-rubric',
  templateUrl: './rubric.component.html',
  styleUrl: './rubric.component.scss',
})
export class RubricComponent {
  readonly rubric = input.required<RubricView>();
  readonly selected = output<RubricLevelSelect>();
}
