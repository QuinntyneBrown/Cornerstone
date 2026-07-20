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

export interface CsHeroAction {
  readonly id: string;
  readonly label: string;
  readonly href?: string;
  readonly appearance?: 'primary' | 'secondary';
}
