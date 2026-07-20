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
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsProgressBarComponent,
  CsProgressRingComponent,
  CsSkeletonComponent,
} from '../foundations';
import { CsDataState, CsDataStateError, CsFormatService, CsMessageTone } from '../platform';
import { Subject } from 'rxjs';
import { CsToastConfig } from './cs-toast-config.interface';
import { CsToastRef } from './cs-toast-ref.class';

@Injectable({ providedIn: 'root' })
export class CsToastService {
  private sequence = 0;
  readonly items = signal<readonly CsToastRef[]>([]);
  open(config: CsToastConfig): CsToastRef {
    const ref = new CsToastRef(++this.sequence, config);
    this.items.update((items) => [...items, ref].slice(-3));
    const duration = config.duration ?? (config.actionLabel ? 10000 : 5000);
    setTimeout(() => this.dismiss(ref.id), duration);
    return ref;
  }
  dismiss(id: number): void {
    this.items.update((items) => items.filter((item) => item.id !== id));
  }
}
