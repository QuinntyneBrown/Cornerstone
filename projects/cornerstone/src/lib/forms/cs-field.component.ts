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
  selector: 'cs-field',
  templateUrl: './cs-field.component.html',
  styleUrl: './cs-field.component.scss',
  host: { class: 'cs-field' },
})
export class CsFieldComponent {
  private readonly ids = inject(CsIdService);
  readonly label = input.required<string>();
  readonly forId = input(this.ids.next('control'));
  readonly hint = input('');
  readonly error = input('');
  readonly required = input(false, { transform: booleanAttribute });
  readonly hintId = signal(this.ids.next('hint'));
  readonly errorId = signal(this.ids.next('error'));
}
