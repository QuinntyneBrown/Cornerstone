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
import { CsChipRemoveEvent } from './cs-chip-remove-event.interface';
import { CsChipSelectionChange } from './cs-chip-selection-change.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-chip-list',
  templateUrl: './cs-chip-list.component.html',
  styleUrl: './cs-chip-list.component.scss',
})
export class CsChipListComponent {
  readonly chips = input.required<readonly { id: string; label: string; selected?: boolean }[]>();
  readonly removable = input(false);
  readonly selectable = input(false);
  readonly removed = output<CsChipRemoveEvent>();
  readonly selectionChange = output<CsChipSelectionChange>();
}
