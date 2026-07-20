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
import { CsContentSectionVariant } from './cs-content-section-variant.type';
import { CsSectionCard } from './cs-section-card.interface';
import { CsSectionStat } from './cs-section-stat.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-content-section',
  imports: [CsCardComponent],
  templateUrl: './cs-content-section.component.html',
  styleUrl: './cs-content-section.component.scss',
})
export class CsContentSectionComponent {
  readonly title = input.required<string>();
  readonly summary = input('');
  readonly variant = input<CsContentSectionVariant>('plain');
  readonly cards = input<readonly CsSectionCard[]>([]);
  readonly stats = input<readonly CsSectionStat[]>([]);
}
