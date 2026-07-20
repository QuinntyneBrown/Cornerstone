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

export interface CsBrandAsset {
  readonly viewBox: string;
  readonly path: string;
  readonly wordmark: string;
  readonly descriptor: string;
}
