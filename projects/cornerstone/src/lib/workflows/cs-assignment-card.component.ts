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
import { CsAssignmentAction } from './cs-assignment-action.interface';
import { CsAssignmentView } from './cs-assignment-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-assignment-card',
  imports: [CsCardComponent, CsBadgeComponent, CsButtonDirective],
  templateUrl: './cs-assignment-card.component.html',
  styleUrl: './cs-assignment-card.component.scss',
})
export class CsAssignmentCardComponent {
  readonly assignment = input.required<CsAssignmentView>();
  readonly action = output<CsAssignmentAction>();
}
