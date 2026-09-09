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
import { MetricBarsComponent } from '../metric-bars/metric-bars.component';
import { CsMetricSeries } from '../cs-metric-series.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-comparison-chart',
  templateUrl: './comparison-chart.component.html',
  styleUrl: './comparison-chart.component.scss',
  imports: [MetricBarsComponent],
})
export class ComparisonChartComponent {
  readonly series = input.required<readonly CsMetricSeries[]>();
}
