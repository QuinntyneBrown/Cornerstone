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
import { CsEvidenceItem } from './cs-evidence-item.interface';
import { CsReviewFeedback } from './cs-review-feedback.interface';
import { CsSubmissionStatus } from './cs-submission-status.type';
import { CsSubmissionVersion } from './cs-submission-version.interface';

export interface CsSubmissionView extends CsViewModel {
  readonly status: CsSubmissionStatus;
  readonly versions: readonly CsSubmissionVersion[];
  readonly evidence: readonly CsEvidenceItem[];
  readonly feedback?: CsReviewFeedback;
}
