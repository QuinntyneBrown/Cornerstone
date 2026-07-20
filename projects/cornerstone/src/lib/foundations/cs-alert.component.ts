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
  selector: 'cs-alert',
  templateUrl: './cs-alert.component.html',
  styleUrl: './cs-alert.component.scss',
  host: { role: 'status', '[class]': "'cs-alert cs-tone--' + tone()" },
})
export class CsAlertComponent {
  readonly title = input('');
  readonly tone = input<CsMessageTone>('info');
}
