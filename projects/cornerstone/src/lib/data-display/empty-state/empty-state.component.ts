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
import { EmptyStateVariant } from './empty-state-variant.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-empty-state',
  templateUrl: './empty-state.component.html',
  host: { '[class]': "'cs-empty-state cs-empty-state--'+variant()" },
  styleUrl: './empty-state.component.scss',
})
export class EmptyStateComponent {
  readonly title = input.required<string>();
  readonly message = input('');
  readonly variant = input<EmptyStateVariant>('panel');
}
