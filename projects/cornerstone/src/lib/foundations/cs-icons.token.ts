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
import { CsIconSet } from './cs-icon-set.interface';

export const CS_ICONS = new InjectionToken<readonly CsIconSet[]>('CS_ICONS', {
  providedIn: 'root',
  factory: () => [],
});
