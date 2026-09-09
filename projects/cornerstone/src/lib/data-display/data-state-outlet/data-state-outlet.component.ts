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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-data-state-outlet',
  imports: [SkeletonComponent],
  templateUrl: './data-state-outlet.component.html',
  styleUrl: './data-state-outlet.component.scss',
  host: { '[attr.aria-busy]': "state().status==='loading'" },
})
export class DataStateOutletComponent<T> {
  readonly state = input.required<CsDataState<T>>();
}
