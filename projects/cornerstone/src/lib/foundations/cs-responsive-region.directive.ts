import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EnvironmentProviders,
  InjectionToken,
  Injectable,
  booleanAttribute,
  computed,
  inject,
  input,
  makeEnvironmentProviders,
  output,
} from '@angular/core';
import { CsIdService, CsMessageTone } from '../platform';

@Directive({ selector: '[csResponsiveRegion]', host: { '[attr.data-cs-reflow]': 'pattern()' } })
export class CsResponsiveRegionDirective {
  readonly pattern = input<'stack' | 'scroll' | 'collapse' | 'cards'>('stack');
}
