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
import { ConnectivityState } from './connectivity-state.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-offline-banner',
  templateUrl: './offline-banner.component.html',
  host: { role: 'status', 'aria-live': 'polite', '[class]': "'cs-offline cs-offline--'+state()" },
  styleUrl: './offline-banner.component.scss',
})
export class OfflineBannerComponent {
  readonly state = input<ConnectivityState>('online');
  readonly queued = input(0);
}
