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
import { CsKanbanColumn } from './cs-kanban-column.interface';
import { CsKanbanColumnComponent } from './cs-kanban-column.component';
import { CsWorkItemMoveIntent } from './cs-work-item-move-intent.interface';
import { CsWorkItemOpenIntent } from './cs-work-item-open-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-kanban-board',
  imports: [CsKanbanColumnComponent],
  templateUrl: './cs-kanban-board.component.html',
  styleUrl: './cs-kanban-board.component.scss',
})
export class CsKanbanBoardComponent {
  readonly columns = input.required<readonly CsKanbanColumn[]>();
  readonly moved = output<CsWorkItemMoveIntent>();
  readonly opened = output<CsWorkItemOpenIntent>();
}
