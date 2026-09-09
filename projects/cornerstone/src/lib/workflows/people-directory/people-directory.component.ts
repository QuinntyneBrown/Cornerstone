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
import { DirectoryLayout } from './directory-layout.type';
import { PeopleQuery } from './people-query.interface';
import { PeopleSelectionChange } from './people-selection-change.interface';
import { CsPersonOpen } from '../cs-person-open.interface';
import { PersonRowComponent } from '../person-row/person-row.component';
import { PersonRowView } from '../person-row/person-row-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-people-directory',
  imports: [SearchFieldComponent, PersonRowComponent],
  templateUrl: './people-directory.component.html',
  styleUrl: './people-directory.component.scss',
})
export class PeopleDirectoryComponent {
  readonly people = input.required<readonly PersonRowView[]>();
  readonly query = input.required<PeopleQuery>();
  readonly state = input<CsDataState>({ status: 'ready', data: undefined });
  readonly layout = input<DirectoryLayout>('auto');
  readonly queryChanged = output<PeopleQuery>();
  readonly opened = output<CsPersonOpen>();
  readonly selectionChanged = output<PeopleSelectionChange>();
}
