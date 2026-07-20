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
  selector: 'cs-checkbox',
  providers: [valueAccessor(() => CsCheckboxComponent)],
  templateUrl: './cs-checkbox.component.html',
  styleUrl: './cs-checkbox.component.scss',
})
export class CsCheckboxComponent extends CsControlBase<boolean> {
  readonly indeterminate = model(false);
  protected toggle(): void {
    this.indeterminate.set(false);
    this.updateValue(!this.value());
  }
}
