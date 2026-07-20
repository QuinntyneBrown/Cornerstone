import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  Provider,
  computed,
  input,
  output,
} from '@angular/core';
import {
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressRingComponent,
} from '../foundations';
import { CsCheckboxComponent } from '../forms';
import { CsProcessLabels } from './cs-process-labels.interface';
import { CsProcessPalette } from './cs-process-palette.interface';

export interface CsProcessAdapter {
  readonly labels: CsProcessLabels;
  readonly palette: CsProcessPalette;
}
