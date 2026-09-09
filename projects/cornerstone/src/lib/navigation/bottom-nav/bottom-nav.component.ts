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
  AvatarComponent,
  BadgeComponent,
  CsButtonDirective,
  IconComponent,
} from '../../foundations';
import { CsBreakpointService } from '../../platform';
import { BottomNavItem } from './bottom-nav-item.interface';
import { CsNavItemActivation } from '../cs-nav-item-activation.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-bottom-nav',
  imports: [IconComponent],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss',
})
export class BottomNavComponent {
  readonly label = input('Primary navigation');
  readonly items = input.required<readonly BottomNavItem[]>();
  readonly activated = output<CsNavItemActivation>();
}
