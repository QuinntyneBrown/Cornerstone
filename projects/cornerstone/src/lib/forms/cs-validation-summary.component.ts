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
import { CsValidationEntry } from './cs-validation-entry.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-validation-summary',
  templateUrl: './cs-validation-summary.component.html',
  styleUrl: './cs-validation-summary.component.scss',
})
export class CsValidationSummaryComponent {
  readonly title = input('Please correct the following');
  readonly errors = input<readonly CsValidationEntry[]>([]);
}
