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
import { CsPersonOpen } from '../cs-person-open.interface';
import { PersonRowAction } from './person-row-action.interface';
import { PersonRowVariant } from './person-row-variant.type';
import { PersonRowView } from './person-row-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-person-row',
  imports: [PersonComponent, CheckboxComponent],
  templateUrl: './person-row.component.html',
  styleUrl: './person-row.component.scss',
})
export class PersonRowComponent {
  readonly person = input.required<PersonRowView>();
  readonly variant = input<PersonRowVariant>('list');
  readonly opened = output<CsPersonOpen>();
  readonly action = output<PersonRowAction>();
  readonly selectionChanged = output<string>();
}
