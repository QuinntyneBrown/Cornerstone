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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-sidenav',
  templateUrl: './cs-sidenav.component.html',
  host: { class: 'cs-sidenav' },
  styleUrl: './cs-sidenav.component.scss',
})
export class CsSidenavComponent {
  readonly label = input('Primary navigation');
}
