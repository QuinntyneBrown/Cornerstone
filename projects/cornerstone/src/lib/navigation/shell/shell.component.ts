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
import { ShellSidenavMode } from './shell-sidenav-mode.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-shell',
  templateUrl: './shell.component.html',
  host: { class: 'cs-shell' },
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  private readonly breakpoints = inject(CsBreakpointService);
  readonly opened = model(false);
  readonly mode = input<ShellSidenavMode>('auto');
  readonly compact = computed(
    () => this.mode() === 'over' || (this.mode() === 'auto' && this.breakpoints.compact()),
  );
}
