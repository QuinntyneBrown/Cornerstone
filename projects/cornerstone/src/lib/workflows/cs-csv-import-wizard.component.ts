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
import { CsImportTargetColumn } from './cs-import-target-column.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-csv-import-wizard',
  templateUrl: './cs-csv-import-wizard.component.html',
  styleUrl: './cs-csv-import-wizard.component.scss',
})
export class CsCsvImportWizardComponent {
  readonly title = input('Import CSV');
  readonly columns = input.required<readonly CsImportTargetColumn[]>();
  readonly progress = input(0);
  readonly fileSelected = output<Event>();
  readonly submitted = output<readonly Record<string, string>[]>();
}
