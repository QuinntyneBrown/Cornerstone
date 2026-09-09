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

export interface SectionCard {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly href?: string;
}
