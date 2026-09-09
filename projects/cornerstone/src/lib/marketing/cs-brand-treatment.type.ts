import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  booleanAttribute,
  input,
  output,
} from '@angular/core';
import { CsButtonDirective, CardComponent } from '../foundations';

export type CsBrandTreatment = 'light' | 'dark' | 'mono';
