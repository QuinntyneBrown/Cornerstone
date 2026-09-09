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
import { CsIdService, CsMessageTone } from '../../platform';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  host: { role: 'status', '[class]': "'cs-alert cs-tone--' + tone()" },
})
export class AlertComponent {
  readonly title = input('');
  readonly tone = input<CsMessageTone>('info');
}
