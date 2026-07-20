import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  TemplateRef,
  booleanAttribute,
  computed,
  contentChildren,
  inject,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import {
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsIconComponent,
} from '../foundations';
import { CsBreakpointService } from '../platform';
import { CsPageChange } from './cs-page-change.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-paginator',
  imports: [CsButtonDirective],
  templateUrl: './cs-paginator.component.html',
  styleUrl: './cs-paginator.component.scss',
  host: { class: 'cs-cluster', role: 'navigation', 'aria-label': 'Pagination' },
})
export class CsPaginatorComponent {
  readonly page = model(1);
  readonly pageSize = model(25);
  readonly length = input(0);
  readonly pageSizeOptions = input<readonly number[]>([10, 25, 50, 100]);
  readonly pageChange = output<CsPageChange>();
  readonly pageCount = computed(() => Math.max(1, Math.ceil(this.length() / this.pageSize())));
  protected change(page: number): void {
    this.page.set(page);
    this.pageChange.emit({ page, pageSize: this.pageSize() });
  }
}
