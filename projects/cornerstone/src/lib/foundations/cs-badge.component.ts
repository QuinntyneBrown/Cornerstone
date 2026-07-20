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
  selector: 'cs-badge',
  templateUrl: './cs-badge.component.html',
  styleUrl: './cs-badge.component.scss',
  host: { '[class]': "'cs-badge cs-tone--' + tone()" },
})
export class CsBadgeComponent {
  readonly tone = input<CsMessageTone>('neutral');
}
