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
import { IconSet } from './icon-set.interface';

export const ICONS = new InjectionToken<readonly IconSet[]>('ICONS', {
  providedIn: 'root',
  factory: () => [],
});
