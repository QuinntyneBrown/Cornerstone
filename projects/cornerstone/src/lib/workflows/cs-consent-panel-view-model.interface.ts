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
import { CsConsentContactDetail } from './cs-consent-contact-detail.interface';
import { CsConsentGroup } from './cs-consent-group.interface';
import { CsConsentHistoryEntry } from './cs-consent-history-entry.interface';
import { CsConsentStatus } from './cs-consent-status.type';

export interface CsConsentPanelViewModel extends CsViewModel {
  readonly title: string;
  readonly status: CsConsentStatus;
  readonly groups: readonly CsConsentGroup[];
  readonly history: readonly CsConsentHistoryEntry[];
  readonly contacts: readonly CsConsentContactDetail[];
}
