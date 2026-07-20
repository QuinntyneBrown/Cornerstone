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
import { CsPersonSummary } from './cs-person-summary.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-person',
  imports: [CsAvatarComponent, CsBadgeComponent],
  templateUrl: './cs-person.component.html',
  host: { class: 'cs-person' },
  styleUrl: './cs-person.component.scss',
})
export class CsPersonComponent {
  readonly person = input.required<CsPersonSummary>();
  readonly activated = output<string>();
}
