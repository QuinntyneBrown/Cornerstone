import { ClipboardModule } from '@angular/cdk/clipboard';
import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Pipe,
  PipeTransform,
  booleanAttribute,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import {
  AvatarComponent,
  BadgeComponent,
  CsButtonDirective,
  CardComponent,
  ProgressBarComponent,
} from '../../foundations';
import {
  ChoiceGroupComponent,
  DateTimeFieldComponent,
  FieldComponent,
  CsInputDirective,
  SearchFieldComponent,
  CsTextareaDirective,
} from '../../forms';
import { CsDataState, csSafeUrl } from '../../platform';
import { RunIntent } from './run-intent.interface';
import { RunState } from './run-state.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-code-editor',
  imports: [CsTextareaDirective, CsButtonDirective],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss',
})
export class CodeEditorComponent {
  readonly value = model('');
  readonly language = input('text');
  readonly state = input<RunState>('idle');
  readonly run = output<RunIntent>();
}
