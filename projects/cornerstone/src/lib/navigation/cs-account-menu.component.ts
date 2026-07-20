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
import { CsAccount } from './cs-account.interface';
import { CsAccountAction } from './cs-account-action.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-account-menu',
  imports: [CsAvatarComponent],
  templateUrl: './cs-account-menu.component.html',
  styleUrl: './cs-account-menu.component.scss',
})
export class CsAccountMenuComponent {
  readonly account = input.required<CsAccount>();
  readonly actions = input.required<readonly CsAccountAction[]>();
  readonly open = signal(false);
  readonly actionSelected = output<CsAccountAction>();
  readonly signOut = output<void>();
  protected select(action: CsAccountAction): void {
    this.open.set(false);
    if (action.id === 'sign-out') this.signOut.emit();
    else this.actionSelected.emit(action);
  }
}
