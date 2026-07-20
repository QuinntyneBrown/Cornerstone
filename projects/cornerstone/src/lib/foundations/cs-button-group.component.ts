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
  selector: 'cs-button-group',
  templateUrl: './cs-button-group.component.html',
  host: { class: 'cs-button-group', role: 'group' },
  styleUrl: './cs-button-group.component.scss',
})
export class CsButtonGroupComponent {
  readonly mode = input<'related' | 'split'>('related');
}
