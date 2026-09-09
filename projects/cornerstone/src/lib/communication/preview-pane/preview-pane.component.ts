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
import { PreviewOutput } from './preview-output.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-preview-pane',
  templateUrl: './preview-pane.component.html',
  styleUrl: './preview-pane.component.scss',
})
export class PreviewPaneComponent {
  readonly output = input.required<PreviewOutput>();
}
