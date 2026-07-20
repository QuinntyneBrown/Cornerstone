import { FocusMonitor } from '@angular/cdk/a11y';
import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

export type CsButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'icon';

@Directive({
  selector: '[csButton]',
  host: {
    class: 'cs-button',
    '[class.cs-button--primary]': "resolvedVariant() === 'primary'",
    '[class.cs-button--secondary]': "resolvedVariant() === 'secondary'",
    '[class.cs-button--ghost]': "resolvedVariant() === 'ghost'",
    '[class.cs-button--danger]': "resolvedVariant() === 'danger'",
    '[class.cs-button--icon]': "resolvedVariant() === 'icon'",
    '[class.cs-button--small]': 'small()',
  },
})
export class CsButtonDirective {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly focusMonitor = inject(FocusMonitor);

  readonly variant = input<CsButtonVariant | ''>('primary', { alias: 'csButton' });
  readonly small = input(false, { transform: booleanAttribute });
  protected readonly resolvedVariant = computed(() => this.variant() || 'primary');

  constructor() {
    this.focusMonitor.monitor(this.element, true);
    inject(DestroyRef).onDestroy(() => this.focusMonitor.stopMonitoring(this.element));
  }
}

@Component({
  selector: 'cs-card',
  template: '<ng-content />',
  host: {
    class: 'cs-card',
    '[class.cs-card--raised]': 'raised()',
    '[class.cs-card--ink]': "tone() === 'ink'",
    '[class.cs-card--lime]': "tone() === 'lime'",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsCardComponent {
  readonly raised = input(false, { transform: booleanAttribute });
  readonly tone = input<'paper' | 'ink' | 'lime'>('paper');
}

@Directive({ selector: 'cs-card-header', host: { class: 'cs-card__header' } })
export class CsCardHeaderDirective {}
@Directive({ selector: 'cs-card-content', host: { class: 'cs-card__content' } })
export class CsCardContentDirective {}
@Directive({ selector: 'cs-card-actions', host: { class: 'cs-card__actions' } })
export class CsCardActionsDirective {}

export type CsSemanticTone =
  'neutral' | 'lime' | 'success' | 'warning' | 'error' | 'info' | 'outline';

@Component({
  selector: 'cs-badge',
  template: '<ng-content />',
  host: {
    class: 'cs-badge',
    '[class.cs-badge--lime]': "tone() === 'lime'",
    '[class.cs-badge--success]': "tone() === 'success'",
    '[class.cs-badge--warning]': "tone() === 'warning'",
    '[class.cs-badge--error]': "tone() === 'error'",
    '[class.cs-badge--info]': "tone() === 'info'",
    '[class.cs-badge--outline]': "tone() === 'outline'",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsBadgeComponent {
  readonly tone = input<CsSemanticTone>('neutral');
}

@Component({
  selector: 'cs-alert',
  template: `
    <span aria-hidden="true">{{ icon() }}</span>
    <div>
      @if (title()) {
        <div class="cs-alert__title">{{ title() }}</div>
      }
      <ng-content />
    </div>
  `,
  host: {
    class: 'cs-alert',
    role: 'status',
    '[class.cs-alert--info]': "tone() === 'info'",
    '[class.cs-alert--success]': "tone() === 'success'",
    '[class.cs-alert--warning]': "tone() === 'warning'",
    '[class.cs-alert--error]': "tone() === 'error'",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsAlertComponent {
  readonly tone = input<'info' | 'success' | 'warning' | 'error'>('info');
  readonly title = input('');
  protected readonly icon = computed(
    () => ({ info: 'ⓘ', success: '✓', warning: '!', error: '×' })[this.tone()],
  );
}

@Component({
  selector: 'cs-avatar',
  imports: [NgOptimizedImage],
  template: `
    @if (src()) {
      <img [ngSrc]="src()" [alt]="name()" fill />
    } @else {
      <span aria-hidden="true">{{ initials() }}</span>
      <span class="cs-sr-only">{{ name() }}</span>
    }
  `,
  host: {
    class: 'cs-avatar',
    '[class.cs-avatar--small]': "size() === 'small'",
    '[class.cs-avatar--large]': "size() === 'large'",
    '[style.position]': "src() ? 'relative' : null",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsAvatarComponent {
  readonly name = input.required<string>();
  readonly src = input('');
  readonly size = input<'small' | 'medium' | 'large'>('medium');
  protected readonly initials = computed(() =>
    this.name()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join(''),
  );
}

@Component({
  selector: 'cs-progress',
  template: '<span class="cs-progress__value" [style.width.%]="percentage()"></span>',
  host: {
    class: 'cs-progress',
    role: 'progressbar',
    '[attr.aria-valuenow]': 'value()',
    '[attr.aria-valuemin]': '0',
    '[attr.aria-valuemax]': 'max()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsProgressComponent {
  readonly value = input(0, { transform: numberAttribute });
  readonly max = input(100, { transform: numberAttribute });
  protected readonly percentage = computed(() =>
    Math.min(100, Math.max(0, (this.value() / Math.max(1, this.max())) * 100)),
  );
}

@Component({
  selector: 'cs-spinner',
  template: '<span class="cs-sr-only">{{ label() }}</span>',
  host: { class: 'cs-spinner', role: 'status' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsSpinnerComponent {
  readonly label = input('Loading');
}

@Component({
  selector: 'cs-skeleton',
  template: '',
  host: { class: 'cs-skeleton', '[style.height]': 'height()', '[attr.aria-hidden]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsSkeletonComponent {
  readonly height = input('1rem');
}

@Component({
  selector: 'cs-divider',
  template: '',
  host: { class: 'cs-divider', role: 'separator' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsDividerComponent {}

@Component({
  selector: 'cs-empty-state',
  template: '<ng-content />',
  host: { class: 'cs-empty' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsEmptyStateComponent {}
