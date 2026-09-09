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
import { CsCurriculumNode } from '../cs-curriculum-node.interface';
import { CsCurriculumReorderIntent } from '../cs-curriculum-reorder-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-curriculum-tree',
  templateUrl: './curriculum-tree.component.html',
  styleUrl: './curriculum-tree.component.scss',
})
export class CurriculumTreeComponent {
  readonly nodes = input.required<readonly CsCurriculumNode[]>();
  readonly selected = output<string>();
  readonly reordered = output<CsCurriculumReorderIntent>();
}
