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
import { CsDialogConfig } from './cs-dialog-config.type';
import { CsDialogRef } from './cs-dialog-ref.type';

@Injectable({ providedIn: 'root' })
export class CsDialogService {
  private readonly dialog = inject(Dialog);
  private readonly breakpoints = inject(CsBreakpointService);
  open<R, D, C>(
    component: ComponentType<C>,
    config: CsDialogConfig<D, R, C> = {},
  ): CsDialogRef<R, C> {
    const { size = 'medium', fullScreenOnMobile = false, ...dialogConfig } = config;
    const fullScreen = fullScreenOnMobile && this.breakpoints.compact();
    return this.dialog.open<R, D, C>(component, {
      ...dialogConfig,
      panelClass: ['cs-dialog-panel', `cs-dialog--${fullScreen ? 'full' : size}`],
    });
  }
}
