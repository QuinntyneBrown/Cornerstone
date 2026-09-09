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
import { CurriculumTreeComponent } from '../curriculum-tree/curriculum-tree.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-progression-builder',
  imports: [CurriculumTreeComponent],
  templateUrl: './progression-builder.component.html',
  styleUrl: './progression-builder.component.scss',
})
export class ProgressionBuilderComponent {
  readonly nodes = input.required<readonly CsCurriculumNode[]>();
  readonly reordered = output<CsCurriculumReorderIntent>();
}
