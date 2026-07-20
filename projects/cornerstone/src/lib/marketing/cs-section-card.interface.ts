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

export interface CsSectionCard {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly href?: string;
}
