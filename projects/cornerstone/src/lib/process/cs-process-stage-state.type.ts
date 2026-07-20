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

export type CsProcessStageState = 'complete' | 'current' | 'available' | 'locked' | 'error';
