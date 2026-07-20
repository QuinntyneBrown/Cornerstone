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
import { CsDividerOrientation } from './cs-divider-orientation.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-divider',
  templateUrl: './cs-divider.component.html',
  host: {
    role: 'separator',
    '[attr.aria-orientation]': 'orientation()',
    '[class]': "'cs-divider cs-divider--' + orientation()",
  },
  styleUrl: './cs-divider.component.scss',
})
export class CsDividerComponent {
  readonly orientation = input<CsDividerOrientation>('horizontal');
}
