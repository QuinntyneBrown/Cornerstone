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
import { CsSpacingStep } from './cs-spacing-step.type';

@Directive({
  selector: '[csCluster]',
  host: { class: 'cs-cluster', '[style.--cs-gap]': "'var(--cs-space-' + gap() + ')'" },
})
export class CsClusterDirective {
  readonly gap = input<CsSpacingStep>(4);
}
