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
import { ExportRequest } from './export-request.interface';
import { FilterChip } from './filter-chip.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-data-toolbar',
  templateUrl: './data-toolbar.component.html',
  host: { class: 'cs-toolbar' },
  styleUrl: './data-toolbar.component.scss',
})
export class DataToolbarComponent {
  readonly filters = input<readonly FilterChip[]>([]);
  readonly exportRequested = output<ExportRequest>();
}
