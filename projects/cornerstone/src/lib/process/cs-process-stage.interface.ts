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
import { CsProcessStageState } from './cs-process-stage-state.type';

export interface CsProcessStage {
  readonly id: string;
  readonly label: string;
  readonly description?: string;
  readonly state: CsProcessStageState;
  readonly actionLabel?: string;
}
