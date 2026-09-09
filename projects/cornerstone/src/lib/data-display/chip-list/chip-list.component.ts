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
import { ChipRemoveEvent } from './chip-remove-event.interface';
import { ChipSelectionChange } from './chip-selection-change.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrl: './chip-list.component.scss',
})
export class ChipListComponent {
  readonly chips = input.required<readonly { id: string; label: string; selected?: boolean }[]>();
  readonly removable = input(false);
  readonly selectable = input(false);
  readonly removed = output<ChipRemoveEvent>();
  readonly selectionChange = output<ChipSelectionChange>();
}
