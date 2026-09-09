import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  booleanAttribute,
  input,
  output,
} from '@angular/core';
import { CsButtonDirective, CardComponent } from '../../foundations';

export interface HeroAction {
  readonly id: string;
  readonly label: string;
  readonly href?: string;
  readonly appearance?: 'primary' | 'secondary';
}
