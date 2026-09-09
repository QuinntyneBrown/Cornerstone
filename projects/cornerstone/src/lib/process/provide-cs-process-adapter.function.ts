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
import { CS_PROCESS_ADAPTER } from './cs-process-adapter.token';
import { CsProcessAdapter } from './cs-process-adapter.interface';

export function provideCsProcessAdapter(adapter: CsProcessAdapter): Provider {
  return { provide: CS_PROCESS_ADAPTER, useValue: adapter };
}
