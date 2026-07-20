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
import { CsCurriculumNode } from './cs-curriculum-node.interface';
import { CsCurriculumReorderIntent } from './cs-curriculum-reorder-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-curriculum-tree',
  templateUrl: './cs-curriculum-tree.component.html',
  styleUrl: './cs-curriculum-tree.component.scss',
})
export class CsCurriculumTreeComponent {
  readonly nodes = input.required<readonly CsCurriculumNode[]>();
  readonly selected = output<string>();
  readonly reordered = output<CsCurriculumReorderIntent>();
}
