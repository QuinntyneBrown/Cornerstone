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
import { SortChange } from './sort-change.interface';

@Directive({
  selector: 'th[csTableSortHeader]',
  host: { tabindex: '0', role: 'button', '(click)': 'sort()' },
})
export class TableSortHeaderDirective {
  readonly id = input.required<string>({ alias: 'csTableSortHeader' });
  readonly direction = input<'asc' | 'desc' | ''>('');
  readonly sortChange = output<SortChange>();
  protected sort(): void {
    this.sortChange.emit({
      active: this.id(),
      direction: this.direction() === 'asc' ? 'desc' : 'asc',
    });
  }
}
