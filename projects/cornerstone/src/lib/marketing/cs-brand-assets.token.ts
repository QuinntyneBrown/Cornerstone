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
import { CsBrandAssets } from './cs-brand-assets.type';

export const CS_BRAND_ASSETS = new InjectionToken<CsBrandAssets>('CS_BRAND_ASSETS');
