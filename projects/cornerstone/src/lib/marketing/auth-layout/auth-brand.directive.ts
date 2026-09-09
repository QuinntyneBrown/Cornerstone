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

@Directive({ selector: '[csAuthBrand]' })
export class AuthBrandDirective {}
