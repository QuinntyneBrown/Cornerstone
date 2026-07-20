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
import { CsBottomNavItem } from './cs-bottom-nav-item.interface';
import { CsNavItemActivation } from './cs-nav-item-activation.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-bottom-nav',
  imports: [CsIconComponent],
  templateUrl: './cs-bottom-nav.component.html',
  styleUrl: './cs-bottom-nav.component.scss',
})
export class CsBottomNavComponent {
  readonly label = input('Primary navigation');
  readonly items = input.required<readonly CsBottomNavItem[]>();
  readonly activated = output<CsNavItemActivation>();
}
