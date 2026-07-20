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

export type CsBrandName = 'faithtech' | 'liturgy' | 'wordup';
