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
import { CsDialogActionsDirective } from './cs-dialog-actions.directive';
import { CsDialogShellComponent } from './cs-dialog-shell.component';
import { CsDialogTitleDirective } from './cs-dialog-title.directive';
import { CsUnsavedChangesChoice } from './cs-unsaved-changes-choice.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-unsaved-changes-dialog',
  imports: [
    CsDialogShellComponent,
    CsButtonDirective,
    CsDialogTitleDirective,
    CsDialogActionsDirective,
  ],
  templateUrl: './cs-unsaved-changes-dialog.component.html',
  styleUrl: './cs-unsaved-changes-dialog.component.scss',
})
export class CsUnsavedChangesDialogComponent {
  readonly title = input('Unsaved changes');
  readonly choice = output<CsUnsavedChangesChoice>();
}
