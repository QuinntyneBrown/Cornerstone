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

export interface CsPhase {
  readonly id: string;
  readonly label: string;
  readonly tone?: string;
}
