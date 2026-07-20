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
  selector: 'cs-page',
  templateUrl: './cs-page.component.html',
  host: { class: 'cs-page' },
  styleUrl: './cs-page.component.scss',
})
export class CsPageComponent {
  readonly title = input.required<string>();
  readonly subtitle = input('');
}
