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
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressBarComponent,
} from '../foundations';
import {
  CsChoiceGroupComponent,
  CsDateTimeFieldComponent,
  CsFieldComponent,
  CsInputDirective,
  CsSearchFieldComponent,
  CsTextareaDirective,
} from '../forms';
import { CsDataState, csSafeUrl } from '../platform';
import { CsRunIntent } from './cs-run-intent.interface';
import { CsRunState } from './cs-run-state.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-code-editor',
  imports: [CsTextareaDirective, CsButtonDirective],
  templateUrl: './cs-code-editor.component.html',
  styleUrl: './cs-code-editor.component.scss',
})
export class CsCodeEditorComponent {
  readonly value = model('');
  readonly language = input('text');
  readonly state = input<CsRunState>('idle');
  readonly run = output<CsRunIntent>();
}
