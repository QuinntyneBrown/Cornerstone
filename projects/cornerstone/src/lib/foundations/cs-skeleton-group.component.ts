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
  selector: 'cs-skeleton-group',
  templateUrl: './cs-skeleton-group.component.html',
  styleUrl: './cs-skeleton-group.component.scss',
  host: { class: 'cs-skeleton-group' },
})
export class CsSkeletonGroupComponent {
  readonly label = input('Loading');
}
