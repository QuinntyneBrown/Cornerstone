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
import { CsButtonDirective } from '../../foundations';
import { CsControlBase, CsIdService, CsLocalizationService } from '../../platform';
import { AddonPosition } from './addon-position.type';

@Directive({ selector: '[csInputAddon]', host: { class: 'cs-input-addon' } })
export class InputAddonDirective {
  readonly position = input<AddonPosition>('prefix', { alias: 'csInputAddon' });
}
