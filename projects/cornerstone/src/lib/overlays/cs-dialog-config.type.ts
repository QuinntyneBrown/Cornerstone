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
import { CsDialogSize } from './cs-dialog-size.type';

export type CsDialogConfig<D = unknown, R = unknown, C = unknown> = DialogConfig<
  D,
  DialogRef<R, C>
> & { readonly size?: CsDialogSize; readonly fullScreenOnMobile?: boolean };
