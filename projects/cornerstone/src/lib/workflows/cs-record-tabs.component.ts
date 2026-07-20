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
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressBarComponent,
  CsProgressRingComponent,
} from '../foundations';
import {
  CsCheckboxComponent,
  CsChoiceCardComponent,
  CsChoiceGroupComponent,
  CsFieldComponent,
  CsInputDirective,
  CsSearchFieldComponent,
  CsTextareaDirective,
} from '../forms';
import { CsDataState, CsIntent, CsViewModel } from '../platform';
import {
  CsPersonComponent,
  CsPersonSummary,
  CsProgressMatrixComponent,
  CsStatCardComponent,
  CsTableContainerComponent,
  CsTableDirective,
  CsTimelineComponent,
  CsTimelineEntry,
} from '../data-display';
import { CsRecordSection } from './cs-record-section.interface';
import { CsRecordSectionChange } from './cs-record-section-change.interface';
import { CsRecordTabsOrientation } from './cs-record-tabs-orientation.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-record-tabs',
  templateUrl: './cs-record-tabs.component.html',
  styleUrl: './cs-record-tabs.component.scss',
})
export class CsRecordTabsComponent {
  readonly sections = input.required<readonly CsRecordSection[]>();
  readonly active = model.required<string>();
  readonly orientation = input<CsRecordTabsOrientation>('horizontal');
  readonly changed = output<CsRecordSectionChange>();
  protected select(sectionId: string): void {
    this.active.set(sectionId);
    this.changed.emit({ sectionId });
  }
}
