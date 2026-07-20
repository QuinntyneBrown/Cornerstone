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
  selector: 'cs-switch',
  providers: [valueAccessor(() => CsSwitchComponent)],
  templateUrl: './cs-switch.component.html',
  styleUrl: './cs-switch.component.scss',
})
export class CsSwitchComponent extends CsControlBase<boolean> {
  protected toggle(): void {
    this.updateValue(!this.value());
  }
}
