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
import { MediaViewerComponent } from '../media-viewer/media-viewer.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-evidence-preview',
  imports: [MediaViewerComponent],
  templateUrl: './evidence-preview.component.html',
  styleUrl: './evidence-preview.component.scss',
})
export class EvidencePreviewComponent {
  readonly media = input<CsMediaViewModel | null>(null);
}
