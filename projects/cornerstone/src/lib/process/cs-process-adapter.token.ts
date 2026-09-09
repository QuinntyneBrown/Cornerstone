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
import { CsProcessAdapter } from './cs-process-adapter.interface';

export const CS_PROCESS_ADAPTER = new InjectionToken<CsProcessAdapter>('CS_PROCESS_ADAPTER');
