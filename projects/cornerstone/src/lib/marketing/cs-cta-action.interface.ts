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
import { CsHeroAction } from './cs-hero-action.interface';

export interface CsCtaAction extends CsHeroAction {}
