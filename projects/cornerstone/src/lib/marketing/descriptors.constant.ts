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
import { CsBrandName } from './cs-brand-name.type';

export const descriptors: Record<CsBrandName, string> = {
  faithtech: 'Technology for the Church',
  liturgy: 'A FaithTech product',
  wordup: 'A FaithTech product',
};
