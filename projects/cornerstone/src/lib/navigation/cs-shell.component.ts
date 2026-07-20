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
import { CsShellSidenavMode } from './cs-shell-sidenav-mode.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-shell',
  templateUrl: './cs-shell.component.html',
  host: { class: 'cs-shell' },
  styleUrl: './cs-shell.component.scss',
})
export class CsShellComponent {
  private readonly breakpoints = inject(CsBreakpointService);
  readonly opened = model(false);
  readonly mode = input<CsShellSidenavMode>('auto');
  readonly compact = computed(
    () => this.mode() === 'over' || (this.mode() === 'auto' && this.breakpoints.compact()),
  );
}
