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
import { CsTooltipPosition } from './cs-tooltip-position.type';

@Directive({ selector: '[csTooltip]', host: { '[attr.title]': 'text()' } })
export class CsTooltipDirective {
  readonly text = input.required<string>({ alias: 'csTooltip' });
  readonly position = input<CsTooltipPosition>('above');
  readonly openDelay = input(500);
  readonly closeDelay = input(100);
}
