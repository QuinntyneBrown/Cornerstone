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
import { CsCurriculumNodeKind } from './cs-curriculum-node-kind.type';
import { CsCurriculumNodeState } from './cs-curriculum-node-state.type';

export interface CsCurriculumNode {
  readonly id: string;
  readonly parentId?: string;
  readonly label: string;
  readonly kind: CsCurriculumNodeKind;
  readonly state: CsCurriculumNodeState;
  readonly children?: readonly CsCurriculumNode[];
}
