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
import { CsMediaViewModel } from '../cs-media-view-model.type';
import { CsSafeUrlPipe } from '../cs-safe-url.pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-media-viewer',
  imports: [CsSafeUrlPipe],
  templateUrl: './media-viewer.component.html',
  styleUrl: './media-viewer.component.scss',
})
export class MediaViewerComponent {
  readonly media = input.required<CsMediaViewModel>();
  readonly failed = output<void>();
}
