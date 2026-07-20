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
import { CsDefinitionItem } from './cs-definition-item.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-definition-list',
  templateUrl: './cs-definition-list.component.html',
  styleUrl: './cs-definition-list.component.scss',
})
export class CsDefinitionListComponent {
  readonly items = input.required<readonly CsDefinitionItem[]>();
}
