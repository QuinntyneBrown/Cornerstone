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
import { CsInputType } from './cs-input-type.type';
import { valueAccessor } from './value-accessor.function';

@Directive({
  selector: 'input[csInput]',
  providers: [valueAccessor(() => CsInputDirective)],
  host: {
    class: 'cs-input',
    '[attr.disabled]': 'disabled() ? true : null',
    '[value]': 'value() ?? ""',
    '(input)': 'onInput($event)',
    '(blur)': 'markTouched()',
  },
})
export class CsInputDirective extends CsControlBase<string> {
  readonly type = input<CsInputType>('text');
  protected onInput(event: Event): void {
    this.updateValue((event.target as HTMLInputElement).value);
  }
}
