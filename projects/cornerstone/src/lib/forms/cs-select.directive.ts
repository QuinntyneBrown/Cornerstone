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
import { valueAccessor } from './value-accessor.function';

@Directive({
  selector: 'select[csSelect]',
  providers: [valueAccessor(() => CsSelectDirective)],
  host: {
    class: 'cs-select',
    '[attr.disabled]': 'disabled() ? true : null',
    '(change)': 'onChangeValue($event)',
    '(blur)': 'markTouched()',
  },
})
export class CsSelectDirective extends CsControlBase<string> {
  protected onChangeValue(event: Event): void {
    this.updateValue((event.target as HTMLSelectElement).value);
  }
}
