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
import { CsDrawerConfig } from './cs-drawer-config.interface';
import { CsDrawerRef } from './cs-drawer-ref.class';

@Injectable({ providedIn: 'root' })
export class CsDrawerService {
  private readonly overlay = inject(Overlay);
  open<R, D, C>(component: ComponentType<C>, config: CsDrawerConfig<D> = {}): CsDrawerRef<R, C> {
    const ref = this.overlay.create({
      hasBackdrop: config.mode !== 'non-modal',
      positionStrategy: this.overlay.position().global().right('0').top('0'),
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });
    const instance = ref.attach(new ComponentPortal(component)).instance;
    return new CsDrawerRef<R, C>(ref, instance);
  }
}
