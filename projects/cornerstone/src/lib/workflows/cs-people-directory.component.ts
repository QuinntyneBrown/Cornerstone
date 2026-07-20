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
import { CsDirectoryLayout } from './cs-directory-layout.type';
import { CsPeopleQuery } from './cs-people-query.interface';
import { CsPeopleSelectionChange } from './cs-people-selection-change.interface';
import { CsPersonOpen } from './cs-person-open.interface';
import { CsPersonRowComponent } from './cs-person-row.component';
import { CsPersonRowView } from './cs-person-row-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-people-directory',
  imports: [CsSearchFieldComponent, CsPersonRowComponent],
  templateUrl: './cs-people-directory.component.html',
  styleUrl: './cs-people-directory.component.scss',
})
export class CsPeopleDirectoryComponent {
  readonly people = input.required<readonly CsPersonRowView[]>();
  readonly query = input.required<CsPeopleQuery>();
  readonly state = input<CsDataState>({ status: 'ready', data: undefined });
  readonly layout = input<CsDirectoryLayout>('auto');
  readonly queryChanged = output<CsPeopleQuery>();
  readonly opened = output<CsPersonOpen>();
  readonly selectionChanged = output<CsPeopleSelectionChange>();
}
