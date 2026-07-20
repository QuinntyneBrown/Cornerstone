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
import { CsConfirmDialogData } from './cs-confirm-dialog-data.interface';
import { CsConfirmResult } from './cs-confirm-result.type';
import { CsDialogActionsDirective } from './cs-dialog-actions.directive';
import { CsDialogDescriptionDirective } from './cs-dialog-description.directive';
import { CsDialogShellComponent } from './cs-dialog-shell.component';
import { CsDialogTitleDirective } from './cs-dialog-title.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-confirm-dialog',
  imports: [
    CsDialogShellComponent,
    CsDialogTitleDirective,
    CsDialogDescriptionDirective,
    CsDialogActionsDirective,
    CsButtonDirective,
  ],
  templateUrl: './cs-confirm-dialog.component.html',
  styleUrl: './cs-confirm-dialog.component.scss',
})
export class CsConfirmDialogComponent {
  protected readonly strings = inject(CsLocalizationService);
  readonly data = input.required<CsConfirmDialogData>();
  readonly resolved = output<CsConfirmResult>();
}
