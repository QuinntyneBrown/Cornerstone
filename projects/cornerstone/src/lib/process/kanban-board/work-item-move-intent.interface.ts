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

export interface WorkItemMoveIntent {
  readonly itemId: string;
  readonly fromColumnId: string;
  readonly toColumnId: string;
  readonly index: number;
}
