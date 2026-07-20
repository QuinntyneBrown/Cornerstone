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
import { CsDateBounds } from './cs-date-bounds.interface';
import { valueAccessor } from './value-accessor.function';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-date-field',
  providers: [valueAccessor(() => CsDateFieldComponent)],
  templateUrl: './cs-date-field.component.html',
  styleUrl: './cs-date-field.component.scss',
})
export class CsDateFieldComponent extends CsControlBase<string> {
  readonly bounds = input<CsDateBounds>({});
  protected change(e: Event): void {
    this.updateValue((e.target as HTMLInputElement).value);
  }
}
