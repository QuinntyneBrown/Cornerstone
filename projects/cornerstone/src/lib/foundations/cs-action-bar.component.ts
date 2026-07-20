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
  selector: 'cs-action-bar',
  templateUrl: './cs-action-bar.component.html',
  host: { class: 'cs-action-bar' },
  styleUrl: './cs-action-bar.component.scss',
})
export class CsActionBarComponent {
  readonly sticky = input(false, { transform: booleanAttribute });
}
