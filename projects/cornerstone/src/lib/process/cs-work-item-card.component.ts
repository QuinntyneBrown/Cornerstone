import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  Provider,
  computed,
  input,
  output,
} from '@angular/core';
import {
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressRingComponent,
} from '../foundations';
import { CsCheckboxComponent } from '../forms';
import { CsWorkItem } from './cs-work-item.interface';
import { CsWorkItemActionIntent } from './cs-work-item-action-intent.interface';
import { CsWorkItemOpenIntent } from './cs-work-item-open-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-work-item-card',
  imports: [CsCardComponent, CsBadgeComponent],
  templateUrl: './cs-work-item-card.component.html',
  styleUrl: './cs-work-item-card.component.scss',
})
export class CsWorkItemCardComponent {
  readonly item = input.required<CsWorkItem>();
  readonly opened = output<CsWorkItemOpenIntent>();
  readonly action = output<CsWorkItemActionIntent>();
}
