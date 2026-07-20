import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  TemplateRef,
  booleanAttribute,
  computed,
  contentChildren,
  inject,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import {
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsIconComponent,
} from '../foundations';
import { CsBreakpointService } from '../platform';
import { CsTabComponent } from './cs-tab.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-tab-group',
  imports: [NgTemplateOutlet],
  templateUrl: './cs-tab-group.component.html',
  styleUrl: './cs-tab-group.component.scss',
})
export class CsTabGroupComponent {
  readonly tabs = contentChildren(CsTabComponent);
  readonly selectedIndex = model(0);
  readonly selected = output<number>();
  readonly activeTab = computed(() => this.tabs()[this.selectedIndex()]);
  protected select(i: number): void {
    if (!this.tabs()[i]?.disabled()) {
      this.selectedIndex.set(i);
      this.selected.emit(i);
    }
  }
  protected keydown(e: KeyboardEvent): void {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    const length = this.tabs().length;
    const next =
      e.key === 'Home'
        ? 0
        : e.key === 'End'
          ? length - 1
          : (this.selectedIndex() + (e.key === 'ArrowLeft' ? -1 : 1) + length) % length;
    this.select(next);
  }
}
