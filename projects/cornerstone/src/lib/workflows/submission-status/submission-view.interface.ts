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
import { EvidenceItem } from './evidence-item.interface';
import { ReviewFeedback } from './review-feedback.interface';
import { SubmissionStatus } from './submission-status.type';
import { SubmissionVersion } from './submission-version.interface';

export interface SubmissionView extends CsViewModel {
  readonly status: SubmissionStatus;
  readonly versions: readonly SubmissionVersion[];
  readonly evidence: readonly EvidenceItem[];
  readonly feedback?: ReviewFeedback;
}
