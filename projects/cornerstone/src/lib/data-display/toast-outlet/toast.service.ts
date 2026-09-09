import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  TemplateRef,
  booleanAttribute,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import {
  AvatarComponent,
  BadgeComponent,
  CsButtonDirective,
  ProgressBarComponent,
  ProgressRingComponent,
  SkeletonComponent,
} from '../../foundations';
import { CsDataState, CsDataStateError, CsFormatService, CsMessageTone } from '../../platform';
import { Subject } from 'rxjs';
import { ToastConfig } from './toast-config.interface';
import { ToastRef } from './toast-ref.class';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private sequence = 0;
  readonly items = signal<readonly ToastRef[]>([]);
  open(config: ToastConfig): ToastRef {
    const ref = new ToastRef(++this.sequence, config);
    this.items.update((items) => [...items, ref].slice(-3));
    const duration = config.duration ?? (config.actionLabel ? 10000 : 5000);
    setTimeout(() => this.dismiss(ref.id), duration);
    return ref;
  }
  dismiss(id: number): void {
    this.items.update((items) => items.filter((item) => item.id !== id));
  }
}
