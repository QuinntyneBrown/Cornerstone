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
  BadgeComponent,
  CsButtonDirective,
  CardComponent,
  ProgressRingComponent,
} from '../foundations';
import { CheckboxComponent } from '../forms';
import { CsProcessLabels } from './cs-process-labels.interface';
import { CsProcessPalette } from './cs-process-palette.interface';

export interface CsProcessAdapter {
  readonly labels: CsProcessLabels;
  readonly palette: CsProcessPalette;
}
