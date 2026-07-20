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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-dialog-shell',
  imports: [CdkTrapFocus],
  templateUrl: './cs-dialog-shell.component.html',
  host: { class: 'cs-dialog-shell' },
  styleUrl: './cs-dialog-shell.component.scss',
})
export class CsDialogShellComponent {}
