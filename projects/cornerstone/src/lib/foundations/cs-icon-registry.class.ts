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
import { CsIconDefinition } from './cs-icon-definition.interface';
import { CsIconSet } from './cs-icon-set.interface';

@Injectable({ providedIn: 'root' })
export class CsIconRegistry {
  private readonly icons = new Map<string, CsIconDefinition>();
  constructor() {
    for (const set of inject(CS_ICONS))
      for (const icon of set.icons) this.icons.set(icon.name, icon);
  }
  register(icon: CsIconDefinition): void {
    this.icons.set(icon.name, icon);
  }
  registerSet(set: CsIconSet): void {
    for (const icon of set.icons) this.register(icon);
  }
  get(name: string): CsIconDefinition | undefined {
    return this.icons.get(name);
  }
}
