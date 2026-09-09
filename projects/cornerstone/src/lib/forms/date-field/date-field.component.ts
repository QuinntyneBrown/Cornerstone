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
import { DateBounds } from './date-bounds.interface';
import { valueAccessor } from '../value-accessor.function';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-date-field',
  providers: [valueAccessor(() => DateFieldComponent)],
  templateUrl: './date-field.component.html',
  styleUrl: './date-field.component.scss',
})
export class DateFieldComponent extends CsControlBase<string> {
  readonly bounds = input<DateBounds>({});
  protected change(e: Event): void {
    this.updateValue((e.target as HTMLInputElement).value);
  }
}
