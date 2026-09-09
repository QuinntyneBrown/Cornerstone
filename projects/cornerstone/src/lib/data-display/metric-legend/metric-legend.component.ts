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
  AvatarComponent,
  BadgeComponent,
  CsButtonDirective,
  ProgressBarComponent,
  ProgressRingComponent,
  SkeletonComponent,
} from '../../foundations';
import { CsDataState, CsDataStateError, CsFormatService, CsMessageTone } from '../../platform';
import { Subject } from 'rxjs';
import { CsMetricSeries } from '../cs-metric-series.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-metric-legend',
  templateUrl: './metric-legend.component.html',
  styleUrl: './metric-legend.component.scss',
})
export class MetricLegendComponent {
  readonly series = input.required<readonly CsMetricSeries[]>();
}
