import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CsButtonDirective } from './primitives';

@Component({
  selector: 'cs-shell',
  template: `
    <header class="cs-shell__topbar"><ng-content select="[csTopbar]" /></header>
    <aside class="cs-shell__sidenav" [class.cs-shell__sidenav--open]="opened()">
      <ng-content select="[csSidenav]" />
    </aside>
    @if (compact() && opened()) {
      <button
        class="cs-shell__scrim"
        aria-label="Close navigation"
        (click)="opened.set(false)"
      ></button>
    }
    <main class="cs-shell__main"><ng-content /></main>
  `,
  styles: `
    :host {
      display: grid;
      min-height: 100dvh;
      grid-template: 'top top' auto 'side main' 1fr / 15.25rem 1fr;
      background: var(--cs-sand-100);
    }
    .cs-shell__topbar {
      grid-area: top;
      position: sticky;
      top: 0;
      z-index: 20;
      min-height: 3.5rem;
      background: var(--cs-paper);
      border-bottom: 1px solid var(--cs-ink-14);
    }
    .cs-shell__sidenav {
      grid-area: side;
      padding: var(--cs-space-4);
      background: var(--cs-ink);
      color: var(--cs-paper);
    }
    .cs-shell__main {
      grid-area: main;
      min-width: 0;
      padding: clamp(1rem, 3vw, 2.5rem);
    }
    .cs-shell__scrim {
      display: none;
    }
    @media (max-width: 800px) {
      :host {
        display: block;
      }
      .cs-shell__sidenav {
        position: fixed;
        inset: 3.5rem auto 0 0;
        z-index: 30;
        width: min(19rem, 85vw);
        transform: translateX(-105%);
        transition: transform var(--cs-duration);
      }
      .cs-shell__sidenav--open {
        transform: translateX(0);
      }
      .cs-shell__scrim {
        display: block;
        position: fixed;
        inset: 3.5rem 0 0;
        z-index: 25;
        width: 100%;
        border: 0;
        background: rgb(22 22 12 / 55%);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsShellComponent {
  private readonly breakpoint = inject(BreakpointObserver);
  readonly opened = model(false);
  protected readonly compact = signal(false);

  constructor() {
    this.breakpoint
      .observe('(max-width: 800px)')
      .pipe(takeUntilDestroyed())
      .subscribe(({ matches }) => this.compact.set(matches));
  }
}

@Component({
  selector: 'cs-paginator',
  imports: [CsButtonDirective],
  template: `
    <button
      csButton="ghost"
      small
      [disabled]="page() <= 1"
      (click)="page.update((value) => value - 1)"
    >
      Previous
    </button>
    <span>Page {{ page() }} of {{ pageCount() }}</span>
    <button
      csButton="ghost"
      small
      [disabled]="page() >= pageCount()"
      (click)="page.update((value) => value + 1)"
    >
      Next
    </button>
  `,
  host: { class: 'cs-cluster', role: 'navigation', 'aria-label': 'Pagination' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsPaginatorComponent {
  readonly page = model(1);
  readonly pageSize = input(20);
  readonly length = input(0);
  protected readonly pageCount = computed(() =>
    Math.max(1, Math.ceil(this.length() / this.pageSize())),
  );
}

export interface CsStep {
  label: string;
  description?: string;
  complete?: boolean;
}

@Component({
  selector: 'cs-stepper',
  template: `
    <ol class="cs-stepper">
      @for (step of steps(); track step.label; let index = $index) {
        <li [class.is-active]="index === active()" [class.is-complete]="step.complete">
          <button type="button" (click)="active.set(index)">
            <span>{{ step.complete ? '✓' : index + 1 }}</span
            >{{ step.label }}
          </button>
          @if (step.description) {
            <small>{{ step.description }}</small>
          }
        </li>
      }
    </ol>
  `,
  styles: `
    .cs-stepper {
      display: flex;
      gap: var(--cs-space-4);
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: auto;
    }
    li {
      min-width: 9rem;
      color: var(--cs-ink-45);
    }
    button {
      display: flex;
      align-items: center;
      gap: var(--cs-space-2);
      border: 0;
      padding: 0;
      color: inherit;
      background: transparent;
      font-family: var(--cs-font-display);
      font-weight: 650;
      cursor: pointer;
    }
    button span {
      display: grid;
      width: 2rem;
      aspect-ratio: 1;
      place-items: center;
      border: 1px solid var(--cs-ink-24);
      border-radius: 50%;
    }
    .is-active {
      color: var(--cs-ink);
    }
    .is-active button span {
      color: #16160c;
      background: var(--cs-lime);
      border-color: var(--cs-lime);
    }
    .is-complete button span {
      color: var(--cs-paper);
      background: var(--cs-ink);
    }
    small {
      display: block;
      margin: 0.4rem 0 0 2.5rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsStepperComponent {
  readonly steps = input.required<readonly CsStep[]>();
  readonly active = model(0);
}
