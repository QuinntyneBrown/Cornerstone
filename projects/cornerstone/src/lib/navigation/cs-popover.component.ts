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
import { CsAnchorPosition } from './cs-anchor-position.type';
import { CsDismissReason } from './cs-dismiss-reason.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-popover',
  templateUrl: './cs-popover.component.html',
  styleUrl: './cs-popover.component.scss',
})
export class CsPopoverComponent {
  readonly open = model(false);
  readonly position = input<CsAnchorPosition>('below-start');
  readonly trapFocus = input(false);
  readonly ariaLabel = input('');
  readonly closed = output<CsDismissReason>();
}
