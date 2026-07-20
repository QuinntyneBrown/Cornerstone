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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-date-time-field',
  providers: [valueAccessor(() => CsDateTimeFieldComponent)],
  templateUrl: './cs-date-time-field.component.html',
  styleUrl: './cs-date-time-field.component.scss',
})
export class CsDateTimeFieldComponent extends CsControlBase<string> {
  protected change(e: Event): void {
    this.updateValue((e.target as HTMLInputElement).value);
  }
}
