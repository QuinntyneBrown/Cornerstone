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

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly phaseId: string;
  readonly summary?: string;
  readonly progress?: number;
}
