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
import { CsEmptyStateComponent } from './cs-empty-state.component';
import { CsStatePageCondition } from './cs-state-page-condition.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-state-page',
  imports: [CsEmptyStateComponent],
  templateUrl: './cs-state-page.component.html',
  styleUrl: './cs-state-page.component.scss',
})
export class CsStatePageComponent {
  readonly condition = input<CsStatePageCondition>('error');
  readonly title = input.required<string>();
  readonly message = input('');
  readonly action = output<void>();
}
