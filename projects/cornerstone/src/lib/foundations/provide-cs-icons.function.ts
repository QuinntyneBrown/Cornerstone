import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EnvironmentProviders,
  InjectionToken,
  Injectable,
  booleanAttribute,
  computed,
  inject,
  input,
  makeEnvironmentProviders,
  output,
} from '@angular/core';
import { CsIdService, CsMessageTone } from '../platform';
import { CS_ICONS } from './cs-icons.token';
import { CsIconSet } from './cs-icon-set.interface';

export function provideCsIcons(...sets: readonly CsIconSet[]): EnvironmentProviders {
  return makeEnvironmentProviders([{ provide: CS_ICONS, useValue: sets }]);
}
