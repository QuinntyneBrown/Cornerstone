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
import { CsMovementState } from './cs-movement-state.type';

export interface CsMovement {
  readonly id: string;
  readonly label: string;
  readonly state: CsMovementState;
  readonly progress?: number;
}
