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
import { CsProcessAdapter } from './cs-process-adapter.interface';

export const CS_PROCESS_ADAPTER = new InjectionToken<CsProcessAdapter>('CS_PROCESS_ADAPTER');
