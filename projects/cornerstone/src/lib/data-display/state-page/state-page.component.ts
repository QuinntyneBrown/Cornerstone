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
import { EmptyStateComponent } from '../empty-state/empty-state.component';
import { StatePageCondition } from './state-page-condition.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-state-page',
  imports: [EmptyStateComponent],
  templateUrl: './state-page.component.html',
  styleUrl: './state-page.component.scss',
})
export class StatePageComponent {
  readonly condition = input<StatePageCondition>('error');
  readonly title = input.required<string>();
  readonly message = input('');
  readonly action = output<void>();
}
