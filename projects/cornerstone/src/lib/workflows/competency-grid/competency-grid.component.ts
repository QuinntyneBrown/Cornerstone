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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-competency-grid',
  imports: [ProgressMatrixComponent],
  templateUrl: './competency-grid.component.html',
  styleUrl: './competency-grid.component.scss',
})
export class CompetencyGridComponent {
  readonly columns = input.required<readonly string[]>();
  readonly rows = input.required<
    readonly {
      label: string;
      cells: readonly ('complete' | 'in-progress' | 'empty' | 'not-applicable')[];
    }[]
  >();
}
