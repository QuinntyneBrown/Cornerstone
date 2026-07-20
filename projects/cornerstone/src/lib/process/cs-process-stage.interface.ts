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
import { CsProcessStageState } from './cs-process-stage-state.type';

export interface CsProcessStage {
  readonly id: string;
  readonly label: string;
  readonly description?: string;
  readonly state: CsProcessStageState;
  readonly actionLabel?: string;
}
