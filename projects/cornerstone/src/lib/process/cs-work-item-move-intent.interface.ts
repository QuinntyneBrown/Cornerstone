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

export interface CsWorkItemMoveIntent {
  readonly itemId: string;
  readonly fromColumnId: string;
  readonly toColumnId: string;
  readonly index: number;
}
