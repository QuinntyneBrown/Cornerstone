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
  selector: 'cs-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
  host: { class: 'cs-skeleton', '[attr.aria-hidden]': 'true' },
})
export class SkeletonComponent {
  readonly preset = input<'text' | 'title' | 'circle' | 'block' | 'button' | 'table-row'>('text');
}
