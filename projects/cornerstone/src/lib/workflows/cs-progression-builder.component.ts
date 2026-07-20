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
import { CsCurriculumTreeComponent } from './cs-curriculum-tree.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-progression-builder',
  imports: [CsCurriculumTreeComponent],
  templateUrl: './cs-progression-builder.component.html',
  styleUrl: './cs-progression-builder.component.scss',
})
export class CsProgressionBuilderComponent {
  readonly nodes = input.required<readonly CsCurriculumNode[]>();
  readonly reordered = output<CsCurriculumReorderIntent>();
}
