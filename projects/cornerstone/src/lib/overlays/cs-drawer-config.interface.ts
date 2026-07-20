import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  booleanAttribute,
  inject,
  input,
  model,
  output,
} from '@angular/core';
import { CsButtonDirective } from '../foundations';
import { CsBreakpointService, CsLocalizationService } from '../platform';
import { CsDrawerMode } from './cs-drawer-mode.type';
import { CsDrawerPosition } from './cs-drawer-position.type';

export interface CsDrawerConfig<D = unknown> {
  readonly data?: D;
  readonly position?: CsDrawerPosition;
  readonly mode?: CsDrawerMode;
  readonly size?: string;
  readonly responsiveFullScreen?: boolean;
  readonly dismissible?: boolean;
  readonly ariaLabelledBy?: string;
  readonly restoreFocus?: boolean;
}
