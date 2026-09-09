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
import { AssignmentAction } from './assignment-action.interface';
import { AssignmentView } from './assignment-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-assignment-card',
  imports: [CardComponent, BadgeComponent, CsButtonDirective],
  templateUrl: './assignment-card.component.html',
  styleUrl: './assignment-card.component.scss',
})
export class AssignmentCardComponent {
  readonly assignment = input.required<AssignmentView>();
  readonly action = output<AssignmentAction>();
}
