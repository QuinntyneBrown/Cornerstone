import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  TemplateRef,
  ViewEncapsulation,
  contentChildren,
  input,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'cs-tab',
  template: '<ng-template><ng-content /></ng-template>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsTabComponent {
  readonly label = input.required<string>();
  readonly disabled = input(false);
  readonly content = viewChild.required(TemplateRef<unknown>);
}

@Component({
  selector: 'cs-tab-group',
  imports: [NgTemplateOutlet],
  template: `
    <div class="cs-tabs__list" role="tablist" (keydown)="onKeydown($event)">
      @for (tab of tabs(); track tab; let index = $index) {
        <button
          type="button"
          class="cs-tabs__tab"
          role="tab"
          [id]="id() + '-tab-' + index"
          [attr.aria-selected]="selectedIndex() === index"
          [attr.aria-controls]="id() + '-panel-' + index"
          [tabIndex]="selectedIndex() === index ? 0 : -1"
          [disabled]="tab.disabled()"
          (click)="select(index)"
        >
          {{ tab.label() }}
        </button>
      }
    </div>
    @if (activeTab(); as tab) {
      <div
        class="cs-tabs__panel"
        role="tabpanel"
        [id]="id() + '-panel-' + selectedIndex()"
        [attr.aria-labelledby]="id() + '-tab-' + selectedIndex()"
      >
        <ng-container [ngTemplateOutlet]="tab.content()" />
      </div>
    }
  `,
  host: { class: 'cs-tabs' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsTabGroupComponent {
  readonly id = input(`cs-tabs-${Math.random().toString(36).slice(2, 9)}`);
  readonly tabs = contentChildren(CsTabComponent);
  readonly selectedIndex = signal(0);
  protected activeTab = () => this.tabs()[this.selectedIndex()];

  protected select(index: number): void {
    if (!this.tabs()[index]?.disabled()) this.selectedIndex.set(index);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const tabs = this.tabs();
    const direction = event.key === 'ArrowLeft' ? -1 : 1;
    let next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? tabs.length - 1
          : this.selectedIndex() + direction;
    for (let attempts = 0; attempts < tabs.length; attempts += 1) {
      next = (next + tabs.length) % tabs.length;
      if (!tabs[next]?.disabled()) {
        this.select(next);
        break;
      }
      next += direction;
    }
  }
}

@Component({
  selector: 'cs-accordion-item',
  template: `
    <button
      type="button"
      class="cs-accordion__trigger"
      [attr.aria-expanded]="expanded()"
      (click)="expanded.update((value) => !value)"
    >
      <span>{{ label() }}</span
      ><span aria-hidden="true">{{ expanded() ? '−' : '+' }}</span>
    </button>
    @if (expanded()) {
      <div class="cs-accordion__content"><ng-content /></div>
    }
  `,
  host: { class: 'cs-accordion__item' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsAccordionItemComponent {
  readonly label = input.required<string>();
  readonly expanded = signal(false);
}

@Component({
  selector: 'cs-accordion',
  template: '<ng-content />',
  host: { class: 'cs-accordion' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CsAccordionComponent {}

@Directive({ selector: '[csMenu]', hostDirectives: [CdkMenu], host: { class: 'cs-menu' } })
export class CsMenuDirective {}

@Directive({
  selector: '[csMenuItem]',
  hostDirectives: [CdkMenuItem],
  host: { class: 'cs-menu-item' },
})
export class CsMenuItemDirective {}
