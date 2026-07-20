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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-data-state-outlet',
  imports: [CsSkeletonComponent],
  templateUrl: './cs-data-state-outlet.component.html',
  styleUrl: './cs-data-state-outlet.component.scss',
  host: { '[attr.aria-busy]': "state().status==='loading'" },
})
export class CsDataStateOutletComponent<T> {
  readonly state = input.required<CsDataState<T>>();
}
