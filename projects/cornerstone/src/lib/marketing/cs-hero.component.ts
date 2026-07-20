import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  booleanAttribute,
  input,
  output,
} from '@angular/core';
import { CsButtonDirective, CsCardComponent } from '../foundations';
import { CsHeroAction } from './cs-hero-action.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-hero',
  imports: [CsButtonDirective],
  templateUrl: './cs-hero.component.html',
  styleUrl: './cs-hero.component.scss',
})
export class CsHeroComponent {
  readonly title = input.required<string>();
  readonly summary = input('');
  readonly actions = input<readonly CsHeroAction[]>([]);
  readonly activated = output<string>();
}
