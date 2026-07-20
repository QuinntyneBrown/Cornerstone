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
  selector: 'cs-container',
  templateUrl: './cs-container.component.html',
  host: { '[class]': "'cs-container cs-container--' + width()" },
  styleUrl: './cs-container.component.scss',
})
export class CsContainerComponent {
  readonly width = input<'default' | 'wide' | 'narrow'>('default');
}
