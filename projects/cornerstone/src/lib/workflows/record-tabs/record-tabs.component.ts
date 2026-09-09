import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import {
  AvatarComponent,
  BadgeComponent,
  CsButtonDirective,
  CardComponent,
  ProgressBarComponent,
  ProgressRingComponent,
} from '../../foundations';
import {
  CheckboxComponent,
  ChoiceCardComponent,
  ChoiceGroupComponent,
  FieldComponent,
  CsInputDirective,
  SearchFieldComponent,
  CsTextareaDirective,
} from '../../forms';
import { CsDataState, CsIntent, CsViewModel } from '../../platform';
import {
  PersonComponent,
  PersonSummary,
  ProgressMatrixComponent,
  StatCardComponent,
  TableContainerComponent,
  TableDirective,
  TimelineComponent,
  TimelineEntry,
} from '../../data-display';
import { RecordSection } from './record-section.interface';
import { RecordSectionChange } from './record-section-change.interface';
import { RecordTabsOrientation } from './record-tabs-orientation.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-record-tabs',
  templateUrl: './record-tabs.component.html',
  styleUrl: './record-tabs.component.scss',
})
export class RecordTabsComponent {
  readonly sections = input.required<readonly RecordSection[]>();
  readonly active = model.required<string>();
  readonly orientation = input<RecordTabsOrientation>('horizontal');
  readonly changed = output<RecordSectionChange>();
  protected select(sectionId: string): void {
    this.active.set(sectionId);
    this.changed.emit({ sectionId });
  }
}
