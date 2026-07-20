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
  selector: 'cs-skeleton',
  templateUrl: './cs-skeleton.component.html',
  styleUrl: './cs-skeleton.component.scss',
  host: { class: 'cs-skeleton', '[attr.aria-hidden]': 'true' },
})
export class CsSkeletonComponent {
  readonly preset = input<'text' | 'title' | 'circle' | 'block' | 'button' | 'table-row'>('text');
}
