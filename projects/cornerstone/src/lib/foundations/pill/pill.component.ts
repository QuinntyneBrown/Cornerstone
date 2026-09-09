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
  selector: 'cs-pill',
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss',
  host: { '[class]': "'cs-pill cs-tone--' + tone()" },
})
export class PillComponent {
  readonly tone = input<CsMessageTone>('neutral');
  readonly selected = input(false, { transform: booleanAttribute });
}
