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
  selector: 'cs-page',
  templateUrl: './page.component.html',
  host: { class: 'cs-page' },
  styleUrl: './page.component.scss',
})
export class PageComponent {
  readonly title = input.required<string>();
  readonly subtitle = input('');
}
