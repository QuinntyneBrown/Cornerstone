import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  Provider,
  computed,
  input,
  output,
} from '@angular/core';
import {
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressRingComponent,
} from '../foundations';
import { CsCheckboxComponent } from '../forms';
import { CsWorkItem } from './cs-work-item.interface';

export interface CsKanbanColumn {
  readonly id: string;
  readonly label: string;
  readonly items: readonly CsWorkItem[];
  readonly limit?: number;
}
