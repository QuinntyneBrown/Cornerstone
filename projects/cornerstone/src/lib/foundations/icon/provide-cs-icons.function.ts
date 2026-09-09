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
import { CsIdService, CsMessageTone } from '../../platform';
import { ICONS } from './icons.token';
import { IconSet } from './icon-set.interface';

export function provideCsIcons(...sets: readonly IconSet[]): EnvironmentProviders {
  return makeEnvironmentProviders([{ provide: ICONS, useValue: sets }]);
}
