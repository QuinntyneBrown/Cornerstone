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
import { CsEmptyStateVariant } from './cs-empty-state-variant.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-empty-state',
  templateUrl: './cs-empty-state.component.html',
  host: { '[class]': "'cs-empty-state cs-empty-state--'+variant()" },
  styleUrl: './cs-empty-state.component.scss',
})
export class CsEmptyStateComponent {
  readonly title = input.required<string>();
  readonly message = input('');
  readonly variant = input<CsEmptyStateVariant>('panel');
}
