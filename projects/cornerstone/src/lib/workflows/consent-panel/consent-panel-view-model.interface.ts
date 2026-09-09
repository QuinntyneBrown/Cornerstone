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
import { ConsentContactDetail } from './consent-contact-detail.interface';
import { ConsentGroup } from './consent-group.interface';
import { ConsentHistoryEntry } from './consent-history-entry.interface';
import { ConsentStatus } from './consent-status.type';

export interface ConsentPanelViewModel extends CsViewModel {
  readonly title: string;
  readonly status: ConsentStatus;
  readonly groups: readonly ConsentGroup[];
  readonly history: readonly ConsentHistoryEntry[];
  readonly contacts: readonly ConsentContactDetail[];
}
