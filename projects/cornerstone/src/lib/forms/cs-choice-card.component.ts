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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-choice-card',
  templateUrl: './cs-choice-card.component.html',
  styleUrl: './cs-choice-card.component.scss',
})
export class CsChoiceCardComponent {
  readonly selected = input(false);
  readonly disabled = input(false);
  readonly selectedChange = output<boolean>();
}
