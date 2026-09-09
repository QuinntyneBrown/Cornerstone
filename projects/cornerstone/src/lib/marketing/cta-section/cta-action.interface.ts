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
import { HeroAction } from '../hero/hero-action.interface';

export interface CtaAction extends HeroAction {}
