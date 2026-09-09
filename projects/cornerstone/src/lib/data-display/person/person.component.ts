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
import { PersonSummary } from './person-summary.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-person',
  imports: [AvatarComponent, BadgeComponent],
  templateUrl: './person.component.html',
  host: { class: 'cs-person' },
  styleUrl: './person.component.scss',
})
export class PersonComponent {
  readonly person = input.required<PersonSummary>();
  readonly activated = output<string>();
}
