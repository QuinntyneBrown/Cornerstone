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
import { CsChoiceMode } from './cs-choice-mode.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-choice-group',
  templateUrl: './cs-choice-group.component.html',
  styleUrl: './cs-choice-group.component.scss',
})
export class CsChoiceGroupComponent {
  readonly label = input.required<string>();
  readonly mode = input<CsChoiceMode>('single');
}
