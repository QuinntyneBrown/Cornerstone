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
import { KanbanColumn } from '../kanban-column/kanban-column.interface';
import { KanbanColumnComponent } from '../kanban-column/kanban-column.component';
import { WorkItemMoveIntent } from './work-item-move-intent.interface';
import { WorkItemOpenIntent } from '../work-item-card/work-item-open-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-kanban-board',
  imports: [KanbanColumnComponent],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss',
})
export class KanbanBoardComponent {
  readonly columns = input.required<readonly KanbanColumn[]>();
  readonly moved = output<WorkItemMoveIntent>();
  readonly opened = output<WorkItemOpenIntent>();
}
