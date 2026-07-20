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
import { CsCtaAction } from './cs-cta-action.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-cta-section',
  imports: [CsButtonDirective],
  templateUrl: './cs-cta-section.component.html',
  styleUrl: './cs-cta-section.component.scss',
})
export class CsCtaSectionComponent {
  readonly title = input.required<string>();
  readonly summary = input('');
  readonly actions = input<readonly CsCtaAction[]>([]);
}
