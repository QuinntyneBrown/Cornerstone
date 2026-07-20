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
import { CsExportRequest } from './cs-export-request.interface';
import { CsFilterChip } from './cs-filter-chip.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-data-toolbar',
  templateUrl: './cs-data-toolbar.component.html',
  host: { class: 'cs-toolbar' },
  styleUrl: './cs-data-toolbar.component.scss',
})
export class CsDataToolbarComponent {
  readonly filters = input<readonly CsFilterChip[]>([]);
  readonly exportRequested = output<CsExportRequest>();
}
