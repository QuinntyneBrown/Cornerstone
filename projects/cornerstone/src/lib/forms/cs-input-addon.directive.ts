import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Provider,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CsButtonDirective } from '../foundations';
import { CsControlBase, CsIdService, CsLocalizationService } from '../platform';
import { CsAddonPosition } from './cs-addon-position.type';

@Directive({ selector: '[csInputAddon]', host: { class: 'cs-input-addon' } })
export class CsInputAddonDirective {
  readonly position = input<CsAddonPosition>('prefix', { alias: 'csInputAddon' });
}
