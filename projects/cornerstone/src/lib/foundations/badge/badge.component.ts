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
  selector: 'cs-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  host: { '[class]': "'cs-badge cs-tone--' + tone()" },
})
export class BadgeComponent {
  readonly tone = input<CsMessageTone>('neutral');
}
