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
import { valueAccessor } from '../value-accessor.function';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-radio-group',
  providers: [valueAccessor(() => RadioGroupComponent)],
  templateUrl: './radio-group.component.html',
  host: { role: 'radiogroup' },
  styleUrl: './radio-group.component.scss',
})
export class RadioGroupComponent<T = string> extends CsControlBase<T> {
  readonly label = input.required<string>();
  select(value: T): void {
    this.updateValue(value);
  }
}
