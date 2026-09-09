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
import { KanbanColumn } from './kanban-column.interface';
import { WorkItemCardComponent } from '../work-item-card/work-item-card.component';
import { WorkItemOpenIntent } from '../work-item-card/work-item-open-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-kanban-column',
  imports: [WorkItemCardComponent],
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.scss',
})
export class KanbanColumnComponent {
  readonly column = input.required<KanbanColumn>();
  readonly opened = output<WorkItemOpenIntent>();
}
