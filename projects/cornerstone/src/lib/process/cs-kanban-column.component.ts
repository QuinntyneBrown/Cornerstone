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
import { CsWorkItemCardComponent } from './cs-work-item-card.component';
import { CsWorkItemOpenIntent } from './cs-work-item-open-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-kanban-column',
  imports: [CsWorkItemCardComponent],
  templateUrl: './cs-kanban-column.component.html',
  styleUrl: './cs-kanban-column.component.scss',
})
export class CsKanbanColumnComponent {
  readonly column = input.required<CsKanbanColumn>();
  readonly opened = output<CsWorkItemOpenIntent>();
}
