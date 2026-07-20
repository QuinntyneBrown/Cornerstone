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
  selector: 'cs-tab',
  templateUrl: './cs-tab.component.html',
  styleUrl: './cs-tab.component.scss',
})
export class CsTabComponent {
  readonly label = input.required<string>();
  readonly disabled = input(false);
  readonly badge = input('');
  readonly content = viewChild.required(TemplateRef<unknown>);
}
