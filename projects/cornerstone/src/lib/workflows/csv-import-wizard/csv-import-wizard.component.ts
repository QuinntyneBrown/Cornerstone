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
import { ImportTargetColumn } from './import-target-column.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-csv-import-wizard',
  templateUrl: './csv-import-wizard.component.html',
  styleUrl: './csv-import-wizard.component.scss',
})
export class CsvImportWizardComponent {
  readonly title = input('Import CSV');
  readonly columns = input.required<readonly ImportTargetColumn[]>();
  readonly progress = input(0);
  readonly fileSelected = output<Event>();
  readonly submitted = output<readonly Record<string, string>[]>();
}
