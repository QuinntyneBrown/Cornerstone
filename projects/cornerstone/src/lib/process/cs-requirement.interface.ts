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

export interface CsRequirement {
  readonly id: string;
  readonly label: string;
  readonly complete: boolean;
  readonly required?: boolean;
  readonly disabled?: boolean;
}
