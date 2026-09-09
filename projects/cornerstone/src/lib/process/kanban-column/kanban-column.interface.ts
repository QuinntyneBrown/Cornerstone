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
  BadgeComponent,
  CsButtonDirective,
  CardComponent,
  ProgressRingComponent,
} from '../../foundations';
import { CheckboxComponent } from '../../forms';
import { WorkItem } from '../work-item-card/work-item.interface';

export interface KanbanColumn {
  readonly id: string;
  readonly label: string;
  readonly items: readonly WorkItem[];
  readonly limit?: number;
}
