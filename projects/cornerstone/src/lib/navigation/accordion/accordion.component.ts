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
  selector: 'cs-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  host: { class: 'cs-accordion' },
})
export class AccordionComponent {
  readonly multiple = input(false);
}
