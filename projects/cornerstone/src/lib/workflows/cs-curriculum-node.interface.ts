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
} from '../foundations';
import {
  CheckboxComponent,
  ChoiceCardComponent,
  ChoiceGroupComponent,
  FieldComponent,
  CsInputDirective,
  SearchFieldComponent,
  CsTextareaDirective,
} from '../forms';
import { CsDataState, CsIntent, CsViewModel } from '../platform';
import {
  PersonComponent,
  PersonSummary,
  ProgressMatrixComponent,
  StatCardComponent,
  TableContainerComponent,
  TableDirective,
  TimelineComponent,
  TimelineEntry,
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
