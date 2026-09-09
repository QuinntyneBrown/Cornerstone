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
import { CsButtonDirective } from '../foundations/cs-button.directive';
import { CsControlBase } from '../platform/cs-control-base.class';
import { CsIdService } from '../platform/cs-id.service';
import { CsLocalizationService } from '../platform/cs-localization.service';
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
