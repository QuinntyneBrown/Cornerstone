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
  selector: 'cs-container',
  templateUrl: './container.component.html',
  host: { '[class]': "'cs-container cs-container--' + width()" },
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  readonly width = input<'default' | 'wide' | 'narrow'>('default');
}
