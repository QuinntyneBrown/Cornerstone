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
import { CsCardPresentation } from './cs-card-presentation.type';
import { CsCardTone } from './cs-card-tone.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-card',
  templateUrl: './cs-card.component.html',
  styleUrl: './cs-card.component.scss',
  host: {
    '[class]': "'cs-card cs-card--' + tone() + ' cs-card--' + presentation()",
    '[class.cs-card--interactive]': 'interactive()',
    '[attr.tabindex]': 'interactive() ? 0 : null',
    '(click)': 'activate()',
  },
})
export class CsCardComponent {
  readonly tone = input<CsCardTone>('paper');
  readonly presentation = input<CsCardPresentation>('outlined');
  readonly interactive = input(false, { transform: booleanAttribute });
  readonly activated = output<void>();
  protected activate(): void {
    if (this.interactive()) this.activated.emit();
  }
}
