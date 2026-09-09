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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-nav-group',
  templateUrl: './nav-group.component.html',
  host: { class: 'cs-nav-group' },
  styleUrl: './nav-group.component.scss',
})
export class NavGroupComponent {
  readonly label = input('');
}
