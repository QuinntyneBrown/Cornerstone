import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  TemplateRef,
  booleanAttribute,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import {
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsProgressBarComponent,
  CsProgressRingComponent,
  CsSkeletonComponent,
} from '../foundations';
import { CsDataState, CsDataStateError, CsFormatService, CsMessageTone } from '../platform';
import { Subject } from 'rxjs';
import { CsMetricSeries } from './cs-metric-series.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-metric-value-table',
  templateUrl: './cs-metric-value-table.component.html',
  styleUrl: './cs-metric-value-table.component.scss',
})
export class CsMetricValueTableComponent {
  readonly series = input.required<readonly CsMetricSeries[]>();
}
