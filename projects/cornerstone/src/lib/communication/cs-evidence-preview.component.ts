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
import { CsMediaViewModel } from './cs-media-view-model.type';
import { CsMediaViewerComponent } from './cs-media-viewer.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-evidence-preview',
  imports: [CsMediaViewerComponent],
  templateUrl: './cs-evidence-preview.component.html',
  styleUrl: './cs-evidence-preview.component.scss',
})
export class CsEvidencePreviewComponent {
  readonly media = input<CsMediaViewModel | null>(null);
}
