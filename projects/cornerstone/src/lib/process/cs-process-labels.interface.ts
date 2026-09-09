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
} from '../foundations';
import { CheckboxComponent } from '../forms';

export interface CsProcessLabels {
  readonly stage: string;
  readonly gate: string;
  readonly movement: string;
}
