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
  BadgeComponent,
  CsButtonDirective,
  CardComponent,
  ProgressRingComponent,
} from '../../foundations';
import { CheckboxComponent } from '../../forms';
import { WorkItem } from './work-item.interface';
import { WorkItemActionIntent } from './work-item-action-intent.interface';
import { WorkItemOpenIntent } from './work-item-open-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-work-item-card',
  imports: [CardComponent, BadgeComponent],
  templateUrl: './work-item-card.component.html',
  styleUrl: './work-item-card.component.scss',
})
export class WorkItemCardComponent {
  readonly item = input.required<WorkItem>();
  readonly opened = output<WorkItemOpenIntent>();
  readonly action = output<WorkItemActionIntent>();
}
