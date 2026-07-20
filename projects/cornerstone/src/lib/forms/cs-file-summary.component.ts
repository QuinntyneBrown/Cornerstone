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
import { CsFileEntry } from './cs-file-entry.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-file-summary',
  templateUrl: './cs-file-summary.component.html',
  styleUrl: './cs-file-summary.component.scss',
})
export class CsFileSummaryComponent {
  readonly files = input.required<readonly CsFileEntry[]>();
  readonly removed = output<string>();
}
