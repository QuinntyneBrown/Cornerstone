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
import { CsIconName } from './cs-icon-name.type';
import { CsIconRegistry } from './cs-icon-registry.class';
import { CsIconSize } from './cs-icon-size.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-icon',
  templateUrl: './cs-icon.component.html',
  host: {
    '[class]': "'cs-icon cs-icon--' + size()",
    '[attr.data-missing]': 'definition() ? null : name()',
  },
  styleUrl: './cs-icon.component.scss',
})
export class CsIconComponent {
  private readonly registry = inject(CsIconRegistry);
  readonly name = input.required<CsIconName>();
  readonly label = input('');
  readonly size = input<CsIconSize>('medium');
  readonly fill = input(false, { transform: booleanAttribute });
  readonly definition = computed(() => this.registry.get(this.name()));
}
