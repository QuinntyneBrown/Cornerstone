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
import { CsSortChange } from './cs-sort-change.interface';

@Directive({
  selector: 'th[csTableSortHeader]',
  host: { tabindex: '0', role: 'button', '(click)': 'sort()' },
})
export class CsTableSortHeaderDirective {
  readonly id = input.required<string>({ alias: 'csTableSortHeader' });
  readonly direction = input<'asc' | 'desc' | ''>('');
  readonly sortChange = output<CsSortChange>();
  protected sort(): void {
    this.sortChange.emit({
      active: this.id(),
      direction: this.direction() === 'asc' ? 'desc' : 'asc',
    });
  }
}
