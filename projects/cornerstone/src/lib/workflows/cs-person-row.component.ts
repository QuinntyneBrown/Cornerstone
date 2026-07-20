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
import { CsPersonOpen } from './cs-person-open.interface';
import { CsPersonRowAction } from './cs-person-row-action.interface';
import { CsPersonRowVariant } from './cs-person-row-variant.type';
import { CsPersonRowView } from './cs-person-row-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-person-row',
  imports: [CsPersonComponent, CsCheckboxComponent],
  templateUrl: './cs-person-row.component.html',
  styleUrl: './cs-person-row.component.scss',
})
export class CsPersonRowComponent {
  readonly person = input.required<CsPersonRowView>();
  readonly variant = input<CsPersonRowVariant>('list');
  readonly opened = output<CsPersonOpen>();
  readonly action = output<CsPersonRowAction>();
  readonly selectionChanged = output<string>();
}
