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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-drawer',
  imports: [CdkTrapFocus],
  templateUrl: './cs-drawer.component.html',
  host: { '[class]': "'cs-drawer cs-drawer--'+position()" },
  styleUrl: './cs-drawer.component.scss',
})
export class CsDrawerComponent {
  private readonly breakpoints = inject(CsBreakpointService);
  readonly opened = model(false);
  readonly position = input<CsDrawerPosition>('end');
  readonly mode = input<CsDrawerMode>('modal');
  readonly responsiveFullScreen = input(false, { transform: booleanAttribute });
  readonly dismissible = input(true, { transform: booleanAttribute });
  readonly size = input('24rem');
  readonly closed = output<void>();
  readonly resolvedMode = () =>
    this.responsiveFullScreen() && this.breakpoints.compact() ? 'modal' : this.mode();
  protected dismiss(): void {
    if (this.dismissible()) {
      this.opened.set(false);
      this.closed.emit();
    }
  }
}
