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

export interface CsProject {
  readonly id: string;
  readonly title: string;
  readonly phaseId: string;
  readonly summary?: string;
  readonly progress?: number;
}
