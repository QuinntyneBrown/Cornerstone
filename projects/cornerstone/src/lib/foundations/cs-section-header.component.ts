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
  selector: 'cs-section-header',
  templateUrl: './cs-section-header.component.html',
  host: { class: 'cs-section-header' },
  styleUrl: './cs-section-header.component.scss',
})
export class CsSectionHeaderComponent {
  readonly title = input.required<string>();
  readonly description = input('');
}
