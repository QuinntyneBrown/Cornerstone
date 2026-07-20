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
import { CsBrandAsset } from './cs-brand-asset.interface';
import { CsBrandName } from './cs-brand-name.type';

export type CsBrandAssets = Readonly<Record<CsBrandName, CsBrandAsset>>;
