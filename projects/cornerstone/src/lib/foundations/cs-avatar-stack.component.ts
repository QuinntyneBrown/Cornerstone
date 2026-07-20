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
import { CsAvatarComponent } from './cs-avatar.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-avatar-stack',
  templateUrl: './cs-avatar-stack.component.html',
  imports: [CsAvatarComponent],
  host: { class: 'cs-avatar-stack' },
  styleUrl: './cs-avatar-stack.component.scss',
})
export class CsAvatarStackComponent {
  readonly people = input.required<readonly { id: string; name: string; src?: string }[]>();
  readonly max = input(4);
}
