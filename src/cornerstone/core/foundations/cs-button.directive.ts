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
import { CsIdService } from '../platform/cs-id.service';
import { CsMessageTone } from '../platform/cs-message-tone.type';
import { CsButtonAppearance } from './cs-button-appearance.type';
import { CsButtonSize } from './cs-button-size.type';

@Directive({
  selector: 'button[csButton],a[csButton]',
  host: {
    '[class]': "'cs-button cs-button--' + appearance() + ' cs-button--' + size()",
    '[attr.aria-busy]': 'loading() || null',
    '[attr.tabindex]': 'disabled() ? -1 : null',
  },
})
export class CsButtonDirective {
  readonly appearance = input<CsButtonAppearance, CsButtonAppearance | ''>('primary', {
    alias: 'csButton',
    transform: (value) => value || 'primary',
  });
  readonly size = input<CsButtonSize>('medium');
  readonly loading = input(false, { transform: booleanAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });
}
