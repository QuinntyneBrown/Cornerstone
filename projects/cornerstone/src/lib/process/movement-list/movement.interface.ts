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
import { MovementState } from './movement-state.type';

export interface Movement {
  readonly id: string;
  readonly label: string;
  readonly state: MovementState;
  readonly progress?: number;
}
