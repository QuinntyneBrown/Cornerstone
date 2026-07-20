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
  selector: 'cs-spinner',
  templateUrl: './cs-spinner.component.html',
  host: { role: 'status', '[attr.aria-label]': 'label()' },
  styleUrl: './cs-spinner.component.scss',
})
export class CsSpinnerComponent {
  readonly label = input('Loading');
}
