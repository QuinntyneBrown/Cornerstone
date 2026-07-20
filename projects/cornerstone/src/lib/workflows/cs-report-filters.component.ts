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
import { CsReportExportIntent } from './cs-report-export-intent.interface';
import { CsReportFilterState } from './cs-report-filter-state.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-report-filters',
  imports: [CsSearchFieldComponent, CsButtonDirective],
  templateUrl: './cs-report-filters.component.html',
  styleUrl: './cs-report-filters.component.scss',
})
export class CsReportFiltersComponent {
  readonly value = input.required<CsReportFilterState>();
  readonly changed = output<CsReportFilterState>();
  readonly exported = output<CsReportExportIntent>();
}
