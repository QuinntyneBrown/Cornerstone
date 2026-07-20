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
import { CsMetricDelta } from './cs-metric-delta.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-stat-card',
  templateUrl: './cs-stat-card.component.html',
  host: { class: 'cs-card cs-stat' },
  styleUrl: './cs-stat-card.component.scss',
})
export class CsStatCardComponent {
  private readonly format = inject(CsFormatService);
  readonly label = input.required<string>();
  readonly value = input.required<number>();
  readonly formattedValue = input('');
  readonly delta = input<CsMetricDelta | null>(null);
  readonly formatted = computed(() => this.formattedValue() || this.format.number(this.value()));
  readonly activated = output<void>();
}
