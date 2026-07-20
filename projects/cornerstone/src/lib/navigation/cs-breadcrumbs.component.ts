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
import { CsCrumb } from './cs-crumb.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-breadcrumbs',
  templateUrl: './cs-breadcrumbs.component.html',
  styleUrl: './cs-breadcrumbs.component.scss',
})
export class CsBreadcrumbsComponent {
  readonly crumbs = input.required<readonly CsCrumb[]>();
  readonly maxVisible = input(4);
  readonly separator = input('/');
  readonly visible = computed(() =>
    this.crumbs().length <= this.maxVisible()
      ? this.crumbs()
      : [this.crumbs()[0]!, { label: '…' }, ...this.crumbs().slice(-(this.maxVisible() - 2))],
  );
}
