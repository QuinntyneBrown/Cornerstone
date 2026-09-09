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
  selector: 'cs-skeleton-group',
  templateUrl: './skeleton-group.component.html',
  styleUrl: './skeleton-group.component.scss',
  host: { class: 'cs-skeleton-group' },
})
export class SkeletonGroupComponent {
  readonly label = input('Loading');
}
