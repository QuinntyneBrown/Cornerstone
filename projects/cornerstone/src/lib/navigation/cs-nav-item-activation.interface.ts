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
import { AvatarComponent, BadgeComponent, CsButtonDirective, IconComponent } from '../foundations';
import { CsBreakpointService } from '../platform';

export interface CsNavItemActivation {
  readonly id: string;
  readonly source: 'pointer' | 'keyboard';
}
