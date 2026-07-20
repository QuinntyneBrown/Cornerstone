import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  booleanAttribute,
  input,
  output,
} from '@angular/core';
import { CsButtonDirective, CsCardComponent } from '../foundations';

export interface CsSectionStat {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}
