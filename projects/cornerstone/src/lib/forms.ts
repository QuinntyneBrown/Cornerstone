import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation,
  input,
  model,
} from '@angular/core';

@Directive({ selector: 'input[csInput]', host: { class: 'cs-input' } })
export class CsInputDirective {}

@Directive({ selector: 'select[csSelect]', host: { class: 'cs-select' } })
export class CsSelectDirective {}

@Directive({ selector: 'textarea[csTextarea]', host: { class: 'cs-textarea' } })
export class CsTextareaDirective {}

@Component({
  selector: 'cs-field',
  template: `
    @if (label()) {
      <label class="cs-label" [attr.for]="forId()">{{ label() }}</label>
    }
    <ng-content />
    @if (error()) {
      <span class="cs-field__error" role="alert">{{ error() }}</span>
    } @else if (hint()) {
      <span class="cs-field__hint">{{ hint() }}</span>
    }
  `,
  host: { class: 'cs-field' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsFieldComponent {
  readonly label = input('');
  readonly forId = input('');
  readonly hint = input('');
  readonly error = input('');
}

@Component({
  selector: 'cs-switch',
  template: `
    <button
      type="button"
      role="switch"
      [attr.aria-checked]="checked()"
      [disabled]="disabled()"
      (click)="toggle()"
    >
      <span></span>
    </button>
    <span (click)="toggle()"><ng-content /></span>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--cs-space-2);
      cursor: pointer;
    }
    button {
      width: 2.75rem;
      height: 1.55rem;
      padding: 2px;
      border: 1px solid var(--cs-ink-24);
      border-radius: 999px;
      background: var(--cs-sand-300);
      cursor: pointer;
    }
    button span {
      display: block;
      width: 1.15rem;
      aspect-ratio: 1;
      border-radius: 50%;
      background: var(--cs-paper);
      box-shadow: var(--cs-shadow-sm);
      transition: transform var(--cs-duration);
    }
    button[aria-checked='true'] {
      background: var(--cs-lime-strong);
    }
    button[aria-checked='true'] span {
      transform: translateX(1.15rem);
      background: #16160c;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsSwitchComponent {
  readonly checked = model(false);
  readonly disabled = input(false);
  protected toggle(): void {
    if (!this.disabled()) this.checked.update((value) => !value);
  }
}
