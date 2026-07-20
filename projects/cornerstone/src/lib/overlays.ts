import { CdkTrapFocus, LiveAnnouncer } from '@angular/cdk/a11y';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  ViewEncapsulation,
  inject,
  input,
  output,
} from '@angular/core';
import { CsButtonDirective } from './primitives';

@Component({
  selector: 'cs-dialog-shell',
  imports: [CdkTrapFocus],
  template: `
    <section class="cs-dialog" cdkTrapFocus cdkTrapFocusAutoCapture>
      <header class="cs-dialog__header"><ng-content select="[csDialogTitle]" /></header>
      <div class="cs-dialog__content"><ng-content /></div>
      <footer class="cs-dialog__actions"><ng-content select="[csDialogActions]" /></footer>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsDialogShellComponent {}

@Injectable({ providedIn: 'root' })
export class CsDialogService {
  private readonly dialog = inject(Dialog);

  open<R = unknown, D = unknown, C = unknown>(
    component: ComponentType<C>,
    config: DialogConfig<D, DialogRef<R, C>> = {},
  ): DialogRef<R, C> {
    return this.dialog.open<R, D, C>(component, {
      backdropClass: 'cs-backdrop',
      ...config,
    });
  }
}

export type CsToastTone = 'info' | 'success' | 'warning' | 'error';
export interface CsToastOptions {
  tone?: CsToastTone;
  duration?: number;
  action?: string;
}

@Component({
  selector: 'cs-toast-outlet',
  imports: [CsButtonDirective],
  template: `
    <div>
      <strong>{{ title() }}</strong>
      @if (message()) {
        <div class="cs-muted">{{ message() }}</div>
      }
    </div>
    <button csButton="ghost" small type="button" (click)="dismissed.emit()">{{ action() }}</button>
  `,
  host: { class: 'cs-toast', role: 'status' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsToastOutletComponent {
  readonly title = input('Notification');
  readonly message = input('');
  readonly tone = input<CsToastTone>('info');
  readonly action = input('Dismiss');
  readonly dismissed = output<void>();
}

@Injectable({ providedIn: 'root' })
export class CsToastService {
  private readonly overlay = inject(Overlay);
  private readonly announcer = inject(LiveAnnouncer);
  private activeOverlay?: OverlayRef;

  show(title: string, message = '', options: CsToastOptions = {}): void {
    this.activeOverlay?.dispose();
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().top('1rem').right('1rem'),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    this.activeOverlay = overlayRef;
    const component = overlayRef.attach(new ComponentPortal(CsToastOutletComponent));
    component.setInput('title', title);
    component.setInput('message', message);
    component.setInput('tone', options.tone ?? 'info');
    component.setInput('action', options.action ?? 'Dismiss');
    component.instance.dismissed.subscribe(() => overlayRef.dispose());
    void this.announcer.announce(
      [title, message].filter(Boolean).join('. '),
      options.tone === 'error' ? 'assertive' : 'polite',
    );
    const duration = options.duration ?? 5000;
    if (duration > 0) window.setTimeout(() => overlayRef.dispose(), duration);
  }
}
