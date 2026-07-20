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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-progress-bar',
  templateUrl: './cs-progress-bar.component.html',
  host: {
    role: 'progressbar',
    '[attr.aria-valuenow]': 'indeterminate() ? null : value()',
    '[attr.aria-valuemin]': '0',
    '[attr.aria-valuemax]': 'max()',
  },
  styleUrl: './cs-progress-bar.component.scss',
})
export class CsProgressBarComponent {
  readonly value = input(0);
  readonly max = input(100);
  readonly indeterminate = input(false);
  readonly percentage = computed(() =>
    Math.max(0, Math.min(100, (this.value() / Math.max(1, this.max())) * 100)),
  );
}
